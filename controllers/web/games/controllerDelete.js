// helpers
const { internalServerError, success } = require('@helpers/errorResponse')
// query
const { queryGetOneGame } = require('@query/games/findOne')

module.exports = {
  delete: async (req, res) => {
    const userId = req.id
    const gameId = req.params.game_id
    const linkApi = `/api/web/user/${gameId} -delete-`
    try {
      const gameData = await queryGetOneGame(linkApi, userId, gameId, res)
      if(gameData !== undefined){
            gameData.del_status = true
            gameData.deleted_date_time = new Date()
            await gameData.save()

          const result = {
            id: gameData.id,
            name: gameData.name,
            delStatus: gameData.del_status
          }
          return success(res, 'Delete Game Berhasil', result, linkApi, userId)
      }
    } catch (error) {
      console.log(error)
      return internalServerError(res, error.message, linkApi, userId)
    }
  }
}
