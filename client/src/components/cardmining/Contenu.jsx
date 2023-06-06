import React from "react";
import Cardmining from "./Cardmining";
import HomeIcon from "@mui/icons-material/Home";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import StoreIcon from "@mui/icons-material/Store";
import Tableau from "./Tableau";
import Button from "./Button";
import "./contenu.css";

const Contenu = () => {
  const fields = [
    { label: "ORDRE", field: "ordered" },
    { label: "NOM", field: "name" },
    { label: "EMAIL", field: "email" },
  ];
  const data = [
    { ordered: 1, name: "Kamoto", email: "kamoto@example.com" },
    { ordered: 2, name: "Kcc", email: "kcc@example.com" },
    { ordered: 3, name: "Kamoa", email: "kamoa@example.com" },
  ];

  return (
    <div className="contentcontainer">
      <h1>Aperçu général</h1>
      <div className="flex-card">
        <Cardmining icon={<HomeIcon />} title="Mining" number={30} />
        <Cardmining
          icon={<DataUsageIcon />}
          title="Vendeurs local"
          number={45}
        />
        <Cardmining
          icon={<StoreIcon />}
          title="Contenu des Vendeurs locaux"
          number={12}
        />
      </div>
      <h1>Demandes de création de compte</h1>
      <Tableau
        fields={fields}
        data={data}
        action={
          <>
            <Button bgcolor="edit-color" textcolor="edit-text-color" text="Edit" />
            <Button bgcolor="delete-color" textcolor="delete-text-color" text="Delete" />
          </>
        }
      />
    </div>
  );
};

export default Contenu;
