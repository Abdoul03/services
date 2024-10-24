const express = require('express');
const router = express.Router();

const {
  getClientCanal,
  getClientCanalById,
  createClientCanal,
  updateAClientCanal,
  deleteClientCanal
} = require('../controllers/clientCanalControllers')


// Route pour récupérer tous les clients canal+
router.get('/', getClientCanal);
//Route pour récupérer un client canal+
router.get('/clientCanal/:id', getClientCanalById);
//Route pour mettre a jour un client canal+
router.put('/updateClient/:id', updateAClientCanal);
//Route pour supprimer un client canal+
router.delete('/deleteClient/:id', deleteClientCanal)
// Route pour ajouter un client canal+
router.post('/addClientCanal', createClientCanal);


module.exports = router;
