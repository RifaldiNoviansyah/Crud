
const express = require('express')

const router = express.Router()
const controllerIndex = require('@controllers/web/games/controllerIndex')
const controllerCreate = require('@controllers/web/games/controllerCreate')
const controllerShow = require('@controllers/web/games/controllerShow')
const controllerUpdate = require('@controllers/web/games/controllerUpdate')
const controllerDelete = require('@controllers/web/games/controllerDelete')

const { accessTokenValid } = require("@middlewares/auth");

router.get('/games', accessTokenValid(), controllerIndex.index)
router.post('/game', accessTokenValid(), controllerCreate.create)
router.get('/game/:game_id', accessTokenValid(), controllerShow.show)
router.put('/game/:game_id', accessTokenValid(), controllerUpdate.update)
router.delete('/game/:game_id', accessTokenValid(), controllerDelete.delete)
module.exports = router
