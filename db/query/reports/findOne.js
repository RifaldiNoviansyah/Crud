// model
const { 
  reports: reportModels,
  games: gameModels
} = require('@models')
  // helpers
const { internalServerError, notFound } = require('@helpers/errorResponse')

module.exports = {
  queryGetOneReport: async (linkApi, userId, reportId, res) => {
    try {
      const reportData = await reportModels.findOne(
        {
          where: { del_status: false, id: reportId },
          include: [
            {
              model: gameModels,
              as: "games"
            }
          ]
        }
      )
      if (!reportData) {
        return notFound(res, 'Data report Tidak Ditemukan', reportId, linkApi, userId)
      } else {
        return reportData
      }
    } catch (error) {
      console.log(error)
      return internalServerError(res, error.message, linkApi, userId)
    }
  }
}
  