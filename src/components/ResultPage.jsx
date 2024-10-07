import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar';

const CarbonFootprintCalculator = () => {
  const [electricityConsumption, setElectricityConsumption] = useState("");
  const [cleanEnergyPercentage, setCleanEnergyPercentage] = useState(0);
  const [heatingEnergySource, setHeatingEnergySource] = useState("Coal");
  const [carMileage, setCarMileage] = useState(""); 
  const [publicTransportUsage, setPublicTransportUsage] = useState("");
  const [selectedOption, setSelectedOption] = useState("Individual");

  // State for mining activities
  const [excavationActivity, setExcavationActivity] = useState("");
  const [transportationDistance, setTransportationDistance] = useState("");
  const [equipmentUsage, setEquipmentUsage] = useState("");
  const [mineSize, setMineSize] = useState("");
  const [mineType, setMineType] = useState("Open-pit");

  const navigate = useNavigate();

  const NCV = {
    Coal: 24, // MJ/kg (example value)
    Gas: 48,  // MJ/kg (example value)
    // Add other fuels
  };

  const emissionFactors = {
    CO2: {
      Coal: 2.68,  // kg CO2 per kg of coal (example value)
      Gas: 1.96,   // kg CO2 per kg of gas (example value)
      // Add other fuels
    },
    Transport: {
      Car: 0.24, // kg CO2 per km (example value)
      Public: 0.08, // kg CO2 per km (example value)
    },
    Mining: {
      Excavation: 0.5,  // kg CO2 per ton (example value)
      Transportation: 0.3, // kg CO2 per km (example value)
      Equipment: 1.2, // kg CO2 per hour (example value)
      MineType: {
        "Open-pit": 1.5,  // kg CO2 per unit of mine size (example value)
        "Underground": 2.0, // kg CO2 per unit of mine size (example value)
      },
    },
  };

  const handleCalculate = () => {
    let emissions = 0;

    if (selectedOption === "Individual") {
      const nonCleanEnergyPercentage = 100 - cleanEnergyPercentage;
      const energyConsumptionMJ = electricityConsumption * 3.6;
      const adjustedEnergyConsumption = energyConsumptionMJ * (nonCleanEnergyPercentage / 100);
      const activityDataFuel = adjustedEnergyConsumption / NCV[heatingEnergySource];
      const emissionsGas = activityDataFuel * emissionFactors.CO2[heatingEnergySource];

      const carEmissions = carMileage * emissionFactors.Transport.Car;
      const publicTransportEmissions = publicTransportUsage * emissionFactors.Transport.Public;

      emissions = emissionsGas + carEmissions + publicTransportEmissions;

      navigate("/ResultPage", {
        state: {
          emissions: emissions.toFixed(2),
          formula: `
            Emissions = EmissionsGas + CarEmissions + PublicTransportEmissions
            where:
            EmissionsGas = ActivityDataFuel × EmissionFactorFuel
            CarEmissions = ${carMileage} km × ${emissionFactors.Transport.Car} kg CO2 per km
            PublicTransportEmissions = ${publicTransportUsage} km × ${emissionFactors.Transport.Public} kg CO2 per km
          `,
        },
      });
    } else if (selectedOption === "Mines") {
      const excavationEmissions = excavationActivity * emissionFactors.Mining.Excavation;
      const transportationEmissions = transportationDistance * emissionFactors.Mining.Transportation;
      const equipmentEmissions = equipmentUsage * emissionFactors.Mining.Equipment;
      const mineTypeEmissions = mineSize * emissionFactors.Mining.MineType[mineType];

      emissions = excavationEmissions + transportationEmissions + equipmentEmissions + mineTypeEmissions;

      navigate("/result", {
        state: {
          emissions: emissions.toFixed(2),
          formula: `
            Emissions = ExcavationEmissions + TransportationEmissions + EquipmentEmissions + MineTypeEmissions
            where:
            ExcavationEmissions = ${excavationActivity} tons × ${emissionFactors.Mining.Excavation} kg CO2 per ton
            TransportationEmissions = ${transportationDistance} km × ${emissionFactors.Mining.Transportation} kg CO2 per km
            EquipmentEmissions = ${equipmentUsage} hours × ${emissionFactors.Mining.Equipment} kg CO2 per hour
            MineTypeEmissions = ${mineSize} units × ${emissionFactors.Mining.MineType[mineType]} kg CO2 per unit of mine size
          `,
        },
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div style={styles.calculator}>
        <h1>Carbon Footprint Calculator</h1>
        <div style={styles.options}>
          <button onClick={() => setSelectedOption("Mines")} style={styles.optionButton}>Mines</button>
          <button onClick={() => setSelectedOption("Individual")} style={styles.optionButton}>Individual</button>
        </div>

        {selectedOption === "Individual" && (
          <div style={styles.section}>
            <label style={styles.label}>
              Electricity consumption (KWh/month):
              <input
                type="number"
                value={electricityConsumption}
                onChange={(e) => setElectricityConsumption(e.target.value)}
                style={styles.input}
              />
            </label>
            <label style={styles.label}>
              Percentage of electricity from a clean energy source:
              <input
                type="number"
                value={cleanEnergyPercentage}
                onChange={(e) => setCleanEnergyPercentage(e.target.value)}
                style={styles.input}
              />
            </label>
            <label style={styles.label}>
              Heating energy source:
              <select
                value={heatingEnergySource}
                onChange={(e) => setHeatingEnergySource(e.target.value)}
                style={styles.select}
              >
                <option value="Coal">Coal</option>
                <option value="Gas">Natural Gas</option>
              </select>
            </label>
            <label style={styles.label}>
              Car mileage (km/month):
              <input
                type="number"
                value={carMileage}
                onChange={(e) => setCarMileage(e.target.value)}
                style={styles.input}
              />
            </label>
            <label style={styles.label}>
              Public transport usage (km/month):
              <input
                type="number"
                value={publicTransportUsage}
                onChange={(e) => setPublicTransportUsage(e.target.value)}
                style={styles.input}
              />
            </label>
          </div>
        )}

        {selectedOption === "Mines" && (
          <div style={styles.section}>
            <label style={styles.label}>
              Excavation activity (tons):
              <input
                type="number"
                value={excavationActivity}
                onChange={(e) => setExcavationActivity(e.target.value)}
                style={styles.input}
              />
            </label>
            <label style={styles.label}>
              Transportation distance (km):
              <input
                type="number"
                value={transportationDistance}
                onChange={(e) => setTransportationDistance(e.target.value)}
                style={styles.input}
              />
            </label>
            <label style={styles.label}>
              Equipment usage (hours):
              <input
                type="number"
                value={equipmentUsage}
                onChange={(e) => setEquipmentUsage(e.target.value)}
                style={styles.input}
              />
            </label>
            <label style={styles.label}>
              Mine size (units):
              <input
                type="number"
                value={mineSize}
                onChange={(e) => setMineSize(e.target.value)}
                style={styles.input}
              />
            </label>
            <label style={styles.label}>
              Mine type:
              <select
                value={mineType}
                onChange={(e) => setMineType(e.target.value)}
                style={styles.select}
              >
                <option value="Open-pit">Open-pit</option>
                <option value="Underground">Underground</option>
              </select>
            </label>
          </div>
        )}

        <button onClick={handleCalculate} style={styles.calculateButton}>Calculate</button>
      </div>
    </div>
  );
};

const styles = {
  calculator: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
  },
  options: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  optionButton: {
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '30%',
    textAlign: 'center',
  },
  section: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '10px',
    fontSize: '16px',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    marginTop: '5px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  select: {
    display: 'block',
    width: '100%',
    padding: '8px',
    fontSize: '16px',
    marginTop: '5px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  calculateButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
  },
};

export default CarbonFootprintCalculator;
