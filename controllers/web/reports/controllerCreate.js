// model
const { reports: reportModels } = require('@models')
// helpers
const { internalServerError, success } = require('@helpers/errorResponse')
const validateInputBodyReport = require('@helpers/validate_input_body/reports/validateInputBodyReport')

module.exports = {
  create: async (req, res) => {
    const userId = null
    const linkApi = '/api/web/report -create-'
    try {
      const { 
        gameId,
        title,
        serverLocation,
        fraudster,
        reporter,
        description
      } = req.body

      const dataError = await validateInputBodyReport.validateInputBodyReport(res, req.body, linkApi, userId)
      if (dataError === undefined) {
        const reportData = await reportModels.create({
          game_id: gameId,
          title,
          server_location: serverLocation,
          fraudster,
          reporter,
          description,
          image: req.file.filename,
          del_status: false,
          created_user_id: 0,
          created_at: new Date()
        })
        return success(res, 'Data Game Berhasil Dibuat', reportData, linkApi, userId)
      }
    } catch (error) {
      console.log(error)
      return internalServerError(res, error.message, linkApi, userId)
    }
  }
}
