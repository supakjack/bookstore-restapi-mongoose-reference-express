const express = require('express')
const router = express.Router()
const bookController = require('./../controller/book.controller')

router.get('/', bookController.get)
router.post('/', bookController.add)

module.exports = router
