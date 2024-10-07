  import React, { useState } from "react";
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

    // State for result and formula
    const [emissionsResult, setEmissionsResult] = useState(null);
    const [formulaUsed, setFormulaUsed] = useState("");

    const NCV = {
      Coal: 24,
      Gas: 48,
    };

    const emissionFactors = {
      CO2: {
        Coal: 2.68,
        Gas: 1.96,
      },
      Transport: {
        Car: 0.24,
        Public: 0.08,
      },
      Mining: {
        Excavation: 0.5,
        Transportation: 0.3,
        Equipment: 1.2,
        MineType: {
          "Open-pit": 1.5,
          "Underground": 2.0,
        },
      },
    };

    const handleCalculate = () => {
      let emissions = 0;
      let formula = "";

      if (selectedOption === "Individual") {
        const nonCleanEnergyPercentage = 100 - cleanEnergyPercentage;
        const energyConsumptionMJ = electricityConsumption * 3.6;
        const adjustedEnergyConsumption = energyConsumptionMJ * (nonCleanEnergyPercentage / 100);
        const activityDataFuel = adjustedEnergyConsumption / NCV[heatingEnergySource];
        const emissionsGas = activityDataFuel * emissionFactors.CO2[heatingEnergySource];

        const carEmissions = carMileage * emissionFactors.Transport.Car;
        const publicTransportEmissions = publicTransportUsage * emissionFactors.Transport.Public;

        emissions = emissionsGas + carEmissions + publicTransportEmissions;

        formula = `
          Emissions = EmissionsGas + CarEmissions + PublicTransportEmissions
          where:
          EmissionsGas = ActivityDataFuel × EmissionFactorFuel
          CarEmissions = ${carMileage} km × ${emissionFactors.Transport.Car} kg CO2 per km
          PublicTransportEmissions = ${publicTransportUsage} km × ${emissionFactors.Transport.Public} kg CO2 per km
        `;
      } else if (selectedOption === "Mines") {
        const excavationEmissions = excavationActivity * emissionFactors.Mining.Excavation;
        const transportationEmissions = transportationDistance * emissionFactors.Mining.Transportation;
        const equipmentEmissions = equipmentUsage * emissionFactors.Mining.Equipment;
        const mineTypeEmissions = mineSize * emissionFactors.Mining.MineType[mineType];

        emissions = excavationEmissions + transportationEmissions + equipmentEmissions + mineTypeEmissions;

        formula = `
          Emissions = ExcavationEmissions + TransportationEmissions + EquipmentEmissions + MineTypeEmissions
          where:
          ExcavationEmissions = ${excavationActivity} tons × ${emissionFactors.Mining.Excavation} kg CO2 per ton
          TransportationEmissions = ${transportationDistance} km × ${emissionFactors.Mining.Transportation} kg CO2 per km
          EquipmentEmissions = ${equipmentUsage} hours × ${emissionFactors.Mining.Equipment} kg CO2 per hour
          MineTypeEmissions = ${mineSize} units × ${emissionFactors.Mining.MineType[mineType]} kg CO2 per unit of mine size
        `;
      }

      setEmissionsResult(emissions.toFixed(2));
      setFormulaUsed(formula);
    };

    return (
      <div>
        <Navbar />
        <div style={styles.calculator}>
          <h1>Carbon Footprint Calculator</h1>
          <div style={styles.options}>
            <button onClick={() => setSelectedOption("Mines")} style={styles.optionButton}>Mines</button>
            <button onClick={() => setSelectedOption("Individual")} style={styles.optionButton}>Individual</button>
            <button onClick={() => setSelectedOption("Others")} style={styles.optionButton}>Others</button>
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

          {emissionsResult && (
            <div style={styles.resultSection}>
              <h2>Result</h2>
              <p><strong>Emissions:</strong> {emissionsResult} kg CO2</p>
              <h3>Formula Used</h3>
              <pre style={styles.formula}>{formulaUsed}</pre>
            </div>
          )}
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
      resultSection: {
        marginTop: '20px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        backgroundColor: '#e9ecef',
      },
      formula: {
        backgroundColor: '#f7f7f7',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '16px',
        color: '#333',
        overflowX: 'auto',
        marginBottom: '20px',
      },
    };
export default CarbonFootprintCalculator;