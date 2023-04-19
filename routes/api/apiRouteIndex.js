const express = require("express");
const router = express.Router();

// global
const indexGameRoute = require('./games/indexGameRoute')
const indexUserRoute = require('./users/indexUserRoute')
const indexReportRoute = require('./reports/indexReportRoute')

router.use('/web', indexGameRoute)
router.use('/web', indexUserRoute)
router.use('/web', indexReportRoute)

module.exports = router;