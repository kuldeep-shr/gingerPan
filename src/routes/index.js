const express = require('express') 
const router = express.Router()

const addOrderController = require('../controller/takeOrder')
const addUserController = require('../controller/addUser')

router.post('/add-order', addOrderController.takeOrderFromUser)
router.post('/add-user', addUserController.addUser)
router.get('/get-data', addOrderController.getNewData)
router.get('/update-data', addOrderController.updataData)

module.exports = router