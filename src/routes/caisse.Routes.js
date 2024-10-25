const express = require('express')
const router = express.Router()

const {
  getCaisse,
  getCaisseById,
  updateCaisse,
  deleteCaisse,
  addCaisse
} = require('../controllers/caisseControllers')


router.get('/', getCaisse)
router.get('/:id', getCaisseById)
router.post('/addCaiss', addCaisse)
router.put('/upCaisse/:id', updateCaisse)
router.delete('/dele/:id', deleteCaisse)


module.exports = router
