import React from "react";
import { Bar } from "react-chartjs-2";
import Cardmining from "./Cardmining";
import HomeIcon from "@mui/icons-material/Home";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import StoreIcon from "@mui/icons-material/Store";
import { faker } from "@faker-js/faker";
import "./contenu.css";
const data = [];
for (let i = 0; i < 5; i++) {
  const name = faker.internet.userName();
  const email = faker.internet.email();
  data.push({ name, email });
}

console.log(data)

const chartData = {
  labels: data.map((item) => item.name),
  datasets: [
    {
      label: "Ventes",
      data: data.map((item) => 1),
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
    {
      label: "Ventes 1",
      data: data.map((item) => 1),
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

console.log(chartData);

const Contenudmining = () => {
  // Update the component name here

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
      <h1>Graphique des ventes</h1>
      <div className="chart-container">
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default Contenudmining;
