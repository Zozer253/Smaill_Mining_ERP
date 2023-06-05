import React from "react";
import logo from "../../assets/SmallERP.svg";
import "./sidemenu.css";

const Sidemenu = ({onglets, ongletActif, onOngletClick}) => {
  return (
    <div>
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>

      <div className="Sidemenu">
        {onglets.map((onglet, index) => (
          <div 
            key={index} 
            className={`tab ${onglet === ongletActif ? "active" : ""}`}
            onClick={() => {onOngletClick(onglet)}}
          >
            {onglet.icone}
            <p>{onglet.titre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidemenu;
