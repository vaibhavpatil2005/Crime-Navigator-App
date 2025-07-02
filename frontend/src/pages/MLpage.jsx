import React from "react";
import { useNavigate } from "react-router-dom";
import "./Analyzer.css"; // Import the CSS file

const MLpage = () => {
  const navigate = useNavigate();

  

  return (
    <div className="background-container">
      <div className="vishleshak-box">
        <iframe
          src="https://crime-rate-prediction-epics-proj.onrender.com"
          title="Analyzer"
          className="vishleshak-frame"
        />
      </div>

    </div>
  );
};

export default MLpage;
