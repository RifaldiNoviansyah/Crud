// model
const { games: gameModels } = require('@models')
// helpers
const { internalServerError, success } = require('@helpers/errorResponse')
const validateInputBodyGame = require('@helpers/validate_input_body/games/validateInputBodyGame')

module.exports = {
  create: async (req, res) => {
    const userId = null
    const linkApi = '/api/web/game -create-'
    try {
      const { 
        name
      } = req.body

      const dataError = await validateInputBodyGame.validateInputBodyGame(res, req.body, linkApi, userId)
      if (dataError === undefined) {
        const gameData = await gameModels.create({
          name,
          del_status: false,
          created_user_id: 0,
          created_at: new Date()
        })
        return success(res, 'Data Game Berhasil Dibuat', gameData, linkApi, userId)
      }
    } catch (error) {
      console.log(error)
      return internalServerError(res, error.message, linkApi, userId)
    }
  }
}
