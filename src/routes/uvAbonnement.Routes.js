const express = require('express')
const router = express.Router()

const { getUvAbon, getUvAbonById, updateUvAbon, deleteUvAbon, addUvAbon } = require('../controllers/uvAbonnementControllers')

router.get('/', getUvAbon)
router.get('/:id', getUvAbonById)
router.put('/update/:id', updateUvAbon)
router.delete('/delete/:id', deleteUvAbon)
router.post('/create', addUvAbon)


module.exports = router
