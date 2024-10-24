const express = require('express')
const router = express.Router()

const {
  getCreEnt,
  getCreEntById,
  updateCreEnt,
  deleteCreEnt,
  createCreEnt
} = require('../controllers/creditEntrControllers')

//Route pour recupéré tous les commission
router.get('/', getCreEnt);

//Route pour recupéré une commison par ID
router.get('/:id', getCreEntById);

//Route pour mettre a jour une commision
router.put('/upCreEn/:id', updateCreEnt);

//Route pour supprimer une commision
router.delete('/delCreEn/:id', deleteCreEnt);

//Route pour ajouter une commision
router.post('/addCreEn', createCreEnt);


module.exports = router;
