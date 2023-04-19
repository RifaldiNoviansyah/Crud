
const express = require('express')

const router = express.Router()
const gameRoute = require('./gameRoute')

router.use('/', gameRoute)

module.exports = router
