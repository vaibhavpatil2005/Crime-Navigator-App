import React from "react";
import { useNavigate } from "react-router-dom";
import "./Analyzer.css"; // Import the CSS file

const Analyzer = () => {
  const navigate = useNavigate();

  // Handle button click
  const handlePredictClick = () => {
    navigate("/predict"); // Redirect to the predict page
  };

  return (
    <div className="background-container">
      <div className="vishleshak-box">
        <iframe
          src="https://gleeful-semifreddo-e42763.netlify.app/"
          title="Analyzer"
          className="vishleshak-frame"
        />
      </div>

      {/* Button to predict crime rate */}
      <button className="predict-button" onClick={handlePredictClick}>
        Predict The Crime Rate
      </button>
    </div>
  );
};

export default Analyzer;
