const app = require('./app')

const port = 5000

app.listen(port, () => {
    console.log(`Le serveur est en cours d'exécution sur le port ${port}: \ncliquez ici pour ouvrir l'application http://localhost:3000`);
})