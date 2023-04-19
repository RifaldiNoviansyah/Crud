
const express = require('express')

const router = express.Router()
const reportRoute = require('./reportRoute')

router.use('/', reportRoute)

module.exports = router
