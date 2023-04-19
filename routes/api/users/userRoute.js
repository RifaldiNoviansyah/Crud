
const express = require('express')

const router = express.Router()
const controllerIndex = require('@controllers/web/users/controllerIndex')
const controllerCreate = require('@controllers/web/users/controllerCreate')
const controllerShow = require('@controllers/web/users/controllerShow')
const controllerUpdate = require('@controllers/web/users/controllerUpdate')
const controllerDelete = require('@controllers/web/users/controllerDelete')

router.get('/users', controllerIndex.index)
router.post('/user', controllerCreate.create)
router.get('/user/:user_id', controllerShow.show)
router.put('/user/:user_id', controllerUpdate.update)
router.delete('/user/:user_id', controllerDelete.delete)
module.exports = router
