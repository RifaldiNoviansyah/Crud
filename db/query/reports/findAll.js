// model
const { 
  reports: reportModels,
  games: gameModels
} = require('@models')
  // helpers
const { internalServerError } = require('@helpers/errorResponse')

module.exports = {
  queryGetAllReports: async (linkApi, userId, res) => {
    try {
      const reportDatas = await reportModels.findAll(
        {
          where: { del_status: false },
          include: [
            {
              model: gameModels,
              as: "games"
            }
          ]
        }
      )
      return reportDatas
    } catch (error) {
      console.log(error)
      return internalServerError(res, error.message, linkApi, userId)
    }
  }
}
  