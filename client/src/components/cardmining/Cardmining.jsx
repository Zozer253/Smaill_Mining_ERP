import React from "react";
import "./cardmining.css";

const Cardmining = (props) => {
  return (
    <div className="card-container">
      <div className="sous-card">
        <div className="icon">{props.icon}</div>
        <div className="text-container">
          <h1 className="htitle">{props.title}</h1>
          <h1 className="ntitle">{props.number}</h1>
        </div>
      </div>
    </div>
  );
};

export default Cardmining;
