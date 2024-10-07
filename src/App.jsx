   import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CarbonFootprintCalculator from "./components/CarbonFootprintCalculator.jsx";
import HomePage from "./components/HomePage.jsx";
import ResultPage from "./components/ResultPage.jsx";
import StatePage from "./components/StatePage.jsx"; 
import MinesList from "./components/MinesList.jsx";
import MineDetails from "./components/MineDetails.jsx";
import CarbonNeutrality from "./components/CarbonNeutrality.jsx";
import CarbonSink from "./components/CarbonSink.jsx";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/state/:stateName" element={<StatePage />} />
        <Route path="/calculator" element=    {<CarbonFootprintCalculator />} />
        <Route path="/list" element={<MinesList />} />
        <Route path="/detail" element={<MineDetails />} />
        <Route path="/neutrality" element={<CarbonNeutrality />} />
        <Route path="/sink" element={<CarbonSink />} />
        
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}
