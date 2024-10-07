import React from "react";
import { useParams } from "react-router-dom";

const dummyMinesData = [
  { name: "Mine A", location: "Location A", currentEmission: 500, targetEmission: 300, state: "State A" },
  { name: "Mine B", location: "Location B", currentEmission: 600, targetEmission: 350, state: "State A" },
  // Add more dummy data
];

const StatePage = () => {
  const { stateName } = useParams();

  const minesInState = dummyMinesData.filter((mine) => mine.state === stateName);

  return (
    <div>
      <h1>Mines in {stateName}</h1>
      <ul>
        {minesInState.map((mine) => (
          <li key={mine.name}>
            <h3>{mine.name}</h3>
            <p>Location: {mine.location}</p>
            <p>Current Emission: {mine.currentEmission} tons</p>
            <p>Target Emission: {mine.targetEmission} tons</p>
            {/* Include a photo if you have one */}
          </li>
        ))}
      </ul>
      {/* Add sorting functionality and charts as needed */}
    </div>
  );
};

export default StatePage;
