
const express = require('express')

const router = express.Router()
const controllerIndex = require('@controllers/web/reports/controllerIndex')
const controllerCreate = require('@controllers/web/reports/controllerCreate')
const controllerShow = require('@controllers/web/reports/controllerShow')
const controllerUpdate = require('@controllers/web/reports/controllerUpdate')
const controllerDelete = require('@controllers/web/reports/controllerDelete')
const controllerRetrieveImage = require('@controllers/web/reports/controllerRetrieveImage')

const { accessTokenValid } = require("@middlewares/auth");
const upload = require(`@middlewares/upload`);

router.get('/reports', accessTokenValid(), controllerIndex.index)
router.post('/report', accessTokenValid(),  upload.report, controllerCreate.create)
router.get('/report/:report_id', accessTokenValid(), controllerShow.show)
router.put('/report/:report_id', accessTokenValid(), controllerUpdate.update)
router.delete('/report/:report_id', accessTokenValid(), controllerDelete.delete)
router.get('/report/retrieve-image/:report_id', accessTokenValid(), controllerRetrieveImage.retrieveImage)
module.exports = router
