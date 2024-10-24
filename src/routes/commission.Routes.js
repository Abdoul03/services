const express = require('express')
const router = express.Router()

const {
  createCommission,
  getCommissions,
  getCommissionById,
  updateCommission,
  deleteCommission
} = require('../controllers/commControllers')


//Route pour recupéré tous les commission
router.get('/', getCommissions);
//Route pour recupéré une commison par ID
router.get('/:id', getCommissionById,);
//Route pour mettre a jour une commision
router.put('/upCommi/:id', updateCommission);
//Route pour supprimer une commision
router.delete('/delCommi/:id', deleteCommission);
//Route pour ajouter une commision
router.post('/addCommi', createCommission);


module.exports = router;
