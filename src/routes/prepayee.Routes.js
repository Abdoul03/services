const express = require('express')
const router = express.Router()
const {
  getPrepayee,
  getPrepayeeById,
  updatePrepayee,
  deletePrepayee,
  createPrepayee
} = require('../controllers/prepayeeControllers')



router.get('/', getPrepayee)
router.get('/:id', getPrepayeeById)
router.put('/update/:id', updatePrepayee)
router.delete('/delete/:id', deletePrepayee)
router.post('/addPrep', createPrepayee)

module.exports = router
