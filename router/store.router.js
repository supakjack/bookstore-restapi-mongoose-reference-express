const express = require('express')
const router = express.Router()
const storeController = require('./../controller/store.controller')

router.get('/', storeController.get)
router.post('/', storeController.add)

module.exports = router
