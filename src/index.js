const express = require('express');
const app = express();
const port = 3000;

const clientCanalRoutes = require('./routes/clientCanal.Routes')
const commissionRoutes = require('./routes/commission.Routes')
const creditEntrepriseRoutes = require('./routes/creditEntreprise.Routes')
const prepayee = require('./routes/prepayee.Routes')
const servEntreprise = require('./routes/serviceEntreprise.Routes')
const transIntern = require('./routes/transInter.Routes')
const uv = require('./routes/uvAbonnement.Routes')

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
app.use('/servEntreprise', servEntreprise)
app.use('/transInter', transIntern)
app.use('/uv', uv)



//Lancer le server
app.listen(port, () => {
  console.log(`Le server tourne sur http://localhost:${port}`);
});
