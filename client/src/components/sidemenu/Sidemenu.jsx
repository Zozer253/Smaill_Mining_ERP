import React from "react";
import logo from "../../assets/SmallERP.svg";
import "./sidemenu.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Sidemenu = ({ onglets, ongletActif, onOngletClick }) => {
  return (
    <div>
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>

      <div className="Sidemenu">
        {onglets.map((onglet, index) => (
          <div
            key={index}
            className={`tab ${
              onglet.titre === ongletActif.titre ? "active" : ""
            }`}
            onClick={() => {
              onOngletClick(onglet);
            }}
          >
            {onglet.icone}
            <p>{onglet.titre}</p>
          </div>
        ))}
        <div className="profileparam">
          <AccountCircleIcon />
          <p>Profile</p>
        </div>
      </div>
    </div>
  );
};

export default Sidemenu;
