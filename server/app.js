const express = require("express");
const Sequelize = require("sequelize");

const app = express();

// Initialisation de l'instance Sequelize
const sequelize = new Sequelize("miningerp", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});

// Vérification de la connexion à la base de données
sequelize
  .authenticate()
  .then(() => {
    console.log("l'application s'est connecté à la base donnée");
  })
  .catch((err) => {
    console.error("Impossible de se connecter à la base de données:", err);
  });

module.exports = app;
