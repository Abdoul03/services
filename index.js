const express = require('express');
const app = express();
const port = 3000;
const dotenv = require("dotenv").config();

//la base de donnee
const db = require("./config/db");



app.get('/', (req, res) => {
  res.send('Hello World!');
});






//syncronise les models avec la base de donnee
db.sync(/*{ throw: true }*/)
  .then(() => {
    console.log("Base de données synchronisée");
    app.listen(port, () => {
      console.log(`Le server tourne sur http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Erreur lors de la synchronisation de la base de données:", error);
  });

