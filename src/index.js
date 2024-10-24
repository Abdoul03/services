const express = require('express');
const app = express();
const clientCanalRoutes = require('./routes/clientCanalRoutes')
const dotenv = require("dotenv").config();
const cors = require('cors')

// Middleware pour parser le JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());



// Utiliser les routes pour les utilisateurs
app.use('/canalClient', clientCanalRoutes);




const port = 3000;


//syncronise les models avec la base de donnee
app.listen(port, () => {
  console.log(`Le server tourne sur http://localhost:${port}`);
});
