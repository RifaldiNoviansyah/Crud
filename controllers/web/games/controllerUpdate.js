// helpers
const { internalServerError, success } = require('@helpers/errorResponse')
const validateInputBodyGame = require('@helpers/validate_input_body/games/validateInputBodyGame')
// query
const { queryGetOneGame } = require('@query/games/findOne')


module.exports = {
  update: async (req, res) => {
    const userId = req.id
    const gameId = req.params.game_id
    const linkApi = `/api/web/game/${gameId} -update-`
    try {
      const { 
        name, 
    } = req.body
      const gameData = await queryGetOneGame(linkApi, userId, gameId, res)
      if(gameData !== undefined){
        const dataError = await validateInputBodyGame.validateInputBodyGame(res, req.body, linkApi, userId)
        if (dataError === undefined) {

          gameData.name = name,
          gameData.last_update_user_id = userId
          gameData.updated_at = new Date()
          await gameData.save()

          const result = {
            id: gameData.id,
            name: gameData.name,
            delStatus: gameData.del_status
          }
          return success(res, 'Ubah Game Berhasil', result, linkApi, userId)
        }
      }
    } catch (error) {
      console.log(error)
      return internalServerError(res, error.message, linkApi, userId)
    }
  }
}
