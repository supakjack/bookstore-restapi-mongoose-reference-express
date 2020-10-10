const express = require('express')
const router = express.Router()
const authorController = require('./../controller/author.controller')

router.get('/', authorController.get)
router.post('/', authorController.add)

module.exports = router
