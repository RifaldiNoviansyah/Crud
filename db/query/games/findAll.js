// model
const { games: gameModels } = require('@models')
  // helpers
const { internalServerError } = require('@helpers/errorResponse')

module.exports = {
  queryGetAllGames: async (linkApi, userId, res) => {
    try {
      const gameDatas = await gameModels.findAll(
        {
          where: { del_status: false },
        }
      )
      return gameDatas
    } catch (error) {
      console.log(error)
      return internalServerError(res, error.message, linkApi, userId)
    }
  }
}
  