const express = require('express');
const app = express();

const clientCanalRoutes = require('./routes/clientCanal.Routes')
const commissionRoutes = require('./routes/commission.Routes')
const creditEntrepriseRoutes = require('./routes/creditEntreprise.Routes')
const prepayee = require('./routes/prepayee.Routes')

const cors = require('cors')

// Middleware pour parser le JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());



//les routes
app.use('/canalClient', clientCanalRoutes)
app.use('/commission', commissionRoutes)
app.use('/creditEnt', creditEntrepriseRoutes)
app.use('/prepayee', prepayee)




const port = 3000;


//syncronise les models avec la base de donnee
app.listen(port, () => {
  console.log(`Le server tourne sur http://localhost:${port}`);
});
