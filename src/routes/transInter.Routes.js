const express = require('express')
const router = express.Router()
const {
  getTransInter,
  getTransInterById,
  updateTransInter,
  deleteTransInter,
  addTransInter
} = require('../controllers/transInterControllers')


router.get('/', getTransInter)
router.get('/:id', getTransInterById)
router.put('/update/:id', updateTransInter)
router.delete('/delete/:id', deleteTransInter)
router.post('/create', addTransInter)

module.exports = router
