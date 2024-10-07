import React from "react";

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  section: {
    marginBottom: "30px",
  },
  image: {
    width: "100%",
    height: "auto",
    marginTop: "20px",
  },
  list: {
    listStyleType: "disc",
    paddingLeft: "20px",
  },
  solutionsList: {
    listStyleType: "circle",
    paddingLeft: "20px",
  },
};

const MineDetails = () => {
  const mineData = {
    name: "Example Mine",
    location: "Location XYZ",
    type: "Coal Mine",
    size: "500 hectares",
    emissions: {
      excavation: "1200 tons CO₂",
      transportation: "800 tons CO₂",
      equipmentUsage: "500 tons CO₂",
    },
    otherDetails: {
      methane: "100 tons CO₂ equivalent",
      humidity: "60%",
      temperature: "28°C",
      indirectEmissions: "200 tons CO₂",
    },
    carbonNeutrality: {
      currentFootprint: "2700 tons CO₂",
      expectedTimeframe: "2040",
      strategies: [
        "Use of renewable energy sources",
        "Carbon capture and storage",
        "Optimization of transportation routes",
      ],
    },
    aiMlSolutions: {
      insights:
        "AI suggests optimizing equipment usage and route planning to reduce emissions by 15%.",
      proposedSolutions: [
        "Solution 1: Implement electric vehicles for transportation",
        "Solution 2: AI-driven maintenance scheduling for equipment",
      ],
      recommendations: {
        shortTerm: "Adopt electric vehicles within 2 years.",
        longTerm: "Invest in renewable energy sources.",
      },
    },
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <h1>MineDetails</h1>
        <h2>Comprehensive Details of Mining Operations</h2>
      </div>

      {/* Mine Overview Section */}
      <section style={styles.section}>
        <h3>Mine Overview</h3>
        <p>
          <strong>Name:</strong> {mineData.name}
        </p>
        <p>
          <strong>Location:</strong> {mineData.location}
        </p>
        <p>
          <strong>Type of Mine:</strong> {mineData.type}
        </p>
        <p>
          <strong>Size:</strong> {mineData.size}
        </p>
        <img
          src="path_to_your_image.jpg"
          alt="Mine"
          style={styles.image}
        />
      </section>

      {/* Carbon Emission Details */}
      <section style={styles.section}>
        <h3>Carbon Emission Details</h3>
        <p>
          <strong>Excavation:</strong> {mineData.emissions.excavation}
        </p>
        <p>
          <strong>Transportation:</strong> {mineData.emissions.transportation}
        </p>
        <p>
          <strong>Equipment Usage:</strong> {mineData.emissions.equipmentUsage}
        </p>
      </section>

      {/* Other Environmental Details */}
      <section style={styles.section}>
        <h3>Other Environmental Details</h3>
        <p>
          <strong>Methane Emissions:</strong> {mineData.otherDetails.methane}
        </p>
        <p>
          <strong>Humidity:</strong> {mineData.otherDetails.humidity}
        </p>
        <p>
          <strong>Temperature:</strong> {mineData.otherDetails.temperature}
        </p>
        <p>
          <strong>Indirect Emissions:</strong>{" "}
          {mineData.otherDetails.indirectEmissions}
        </p>
      </section>

      {/* Carbon Neutrality Plan */}
      <section style={styles.section}>
        <h3>Carbon Neutrality Plan</h3>
        <p>
          <strong>Current Carbon Footprint:</strong>{" "}
          {mineData.carbonNeutrality.currentFootprint}
        </p>
        <p>
          <strong>Expected Time to Achieve Carbon Neutrality:</strong>{" "}
          {mineData.carbonNeutrality.expectedTimeframe}
        </p>
        <ul style={styles.list}>
          {mineData.carbonNeutrality.strategies.map((strategy, index) => (
            <li key={index}>{strategy}</li>
          ))}
        </ul>
      </section>

      {/* AI/ML Generated Solutions and Recommendations */}
      <section style={styles.section}>
        <h3>AI/ML Generated Solutions and Recommendations</h3>
        <p>
          <strong>AI/ML Insights:</strong> {mineData.aiMlSolutions.insights}
        </p>
        <ul style={styles.solutionsList}>
          {mineData.aiMlSolutions.proposedSolutions.map((solution, index) => (
            <li key={index}>{solution}</li>
          ))}
        </ul>
        <p>
          <strong>Short-Term Recommendations:</strong>{" "}
          {mineData.aiMlSolutions.recommendations.shortTerm}
        </p>
        <p>
          <strong>Long-Term Recommendations:</strong>{" "}
          {mineData.aiMlSolutions.recommendations.longTerm}
        </p>
      </section>
    </div>
  );
};

export default MineDetails;
