// helpers
const { internalServerError, success } = require('@helpers/errorResponse')
// query
const { queryGetOneGame } = require('@query/games/findOne')

module.exports = {
  show: async (req, res) => {
    const userId = req.id
    const gameId = req.params.game_id
    const linkApi = `/api/web/users/${gameId} -show-`
    try {
      const gameData = await queryGetOneGame(linkApi, userId, gameId, res)
      if(gameData !== undefined){
        const result = {
            id: gameData.id,
            name: gameData.name,
            delStatus: gameData.del_status
        }
        return success(res, 'Menampilkan Detail Game Berhasil', result, linkApi, userId)
      }
    } catch (error) {
      console.log(error)
      return internalServerError(res, error.message, linkApi, userId)
    }
  }
}
