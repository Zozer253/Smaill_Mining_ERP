import React, { useState } from "react";
import { Sidemenu } from "../../components"; // Importez votre composant Sidemenu réel depuis le bon emplacement
import {Header} from "../../components"; // Importez votre composant Header réel depuis le bon emplacement
import {Contenu} from "../../components"; // Importez votre composant Contenu réel depuis le bon emplacement
import "./dashbord.css";
import HomeIcon from "@mui/icons-material/Home";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import StoreIcon from "@mui/icons-material/Store";

const Dashboard = () => {
  const onglets = [
    {
      titre: "Dashboard",
      icone: <HomeIcon />,
      contenu: < Contenu />
    },
    { titre: "Mining", icone: <DataUsageIcon />, contenu: < Contenu /> },
    {
      titre: "Vendeurs local",
      icone: <StoreIcon />,
      contenu: "Contenu des Vendeurs locaux",
    },
  ];


  const [ongletActif, setOngletActif] = useState(onglets[0]);

  const handleOngletClick = (onglet) => {
    setOngletActif(onglet);
  };

  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="sidebar">
        <Sidemenu
          onglets={onglets}
          ongletActif={ongletActif}
          onOngletClick={handleOngletClick}
        />
      </div>
      <div className="content"> {ongletActif.contenu}  </div>
    </div>
  );
};

export default Dashboard;
