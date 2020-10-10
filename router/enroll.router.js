const express = require('express')
const router = express.Router()
const enrollController = require('./../controller/enroll.controller')

router.get('/', enrollController.get)
router.post('/', enrollController.add)

module.exports = router
