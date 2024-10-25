const express = require('express')
const router = express.Router()
const {
  getServEntr,
  getServEntrById,
  updateServEntr,
  deleteServEntr,
  createServEntre
} = require('../controllers/serviceEntrepriseControllers')


router.get('/', getServEntr)
router.get('/:id', getServEntrById)
router.put('/update/:id', updateServEntr)
router.delete('/delete/:id', deleteServEntr)
router.post('/create', createServEntre)

module.exports = router
