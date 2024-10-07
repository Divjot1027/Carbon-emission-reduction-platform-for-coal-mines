import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import Navbar from './Navbar';

const dummyMinesData = [
  {
    name: "Mine A",
    location: "State 1",
    currentEmission: 200,
    targetEmission: 150,
    photo: "../public/m1.webp",
  },
  {
    name: "Mine B",
    location: "State 2",
    currentEmission: 250,
    targetEmission: 200,
    photo: "../public/m2.webp",
  },
  {
    name: "Mine C",
    location: "State 3",
    currentEmission: 100,
    targetEmission: 80,
    photo: "../public/m3.webp",
  },
  // Add more dummy mines as needed
];

const MinesDetailsPage = () => {
  const [mines, setMines] = useState(dummyMinesData);
  const [sortField, setSortField] = useState("name");

  const handleSort = (field) => {
    const sortedMines = [...mines].sort((a, b) => {
      if (field === "name") {
        return a.name.localeCompare(b.name);
      } else if (field === "currentEmission") {
        return a.currentEmission - b.currentEmission;
      }
      return 0;
    });
    setSortField(field);
    setMines(sortedMines);
  };

  const chartData = {
    labels: ["State 1", "State 2", "State 3"], // Add more states as needed
    datasets: [
      {
        label: "Emissions (tons)",
        data: [500, 700, 300], // Dummy emission data
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={styles.page}>
      <Navbar />
      <h1 style={styles.title}>Mines Details</h1>
      <div style={styles.sortButtons}>
        <button style={styles.button} onClick={() => handleSort("name")}>
          Sort by Name
        </button>
        <button style={styles.button} onClick={() => handleSort("currentEmission")}>
          Sort by Emission
        </button>
      </div>
      <div style={styles.minesList}>
        {mines.map((mine, index) => (
          <div key={index} style={styles.mineCard}>
            <img src={mine.photo} alt={mine.name} style={styles.mineImage} />
            <h2>{mine.name}</h2>
            <p><strong>Location:</strong> {mine.location}</p>
            <p><strong>Current Emission:</strong> {mine.currentEmission} tons</p>
            <p><strong>Target Emission:</strong> {mine.targetEmission} tons</p>
          </div>
        ))}
      </div>
      <div style={styles.chartContainer}>
        <h2 style={styles.chartTitle}>Emission by States</h2>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
  },
  title: {
    textAlign: "center",
    color: "#333",
  },
  sortButtons: {
    textAlign: "center",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    margin: "0 10px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  minesList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
    marginBottom: "40px",
  },
  mineCard: {
    width: "300px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#fff",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  mineImage: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "5px",
    marginBottom: "10px",
  },
  chartContainer: {
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  chartTitle: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
};

export default MinesDetailsPage;
