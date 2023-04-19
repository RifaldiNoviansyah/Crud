// model
const { games: gameModels } = require('@models')
  // helpers
const { internalServerError, notFound } = require('@helpers/errorResponse')

module.exports = {
  queryGetOneGame: async (linkApi, userId, gameId, res) => {
    try {
      const gamesData = await gameModels.findOne(
        {
          where: { del_status: false, id: gameId },
        }
      )
      if (!gamesData) {
        return notFound(res, 'Data Game Tidak Ditemukan', gameId, linkApi, userId)
      } else {
        return gamesData
      }
    } catch (error) {
      console.log(error)
      return internalServerError(res, error.message, linkApi, userId)
    }
  }
}
  