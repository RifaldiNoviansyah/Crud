// helpers
const { internalServerError, success } = require('@helpers/errorResponse')
const validateInputBodyReport = require('@helpers/validate_input_body/reports/validateInputBodyReport')
// query
const { queryGetOneReport } = require('@query/reports/findOne')


module.exports = {
  update: async (req, res) => {
    const userId = req.id
    const reoprtId = req.params.report_id
    const linkApi = `/api/web/report/${reoprtId} -update-`
    try {
      const { 
        gameId,
        title,
        serverLocation,
        fraudster,
        reporter,
        description
    } = req.body
      const reportData = await queryGetOneReport(linkApi, userId, reoprtId, res)
      if(reportData !== undefined){
        const dataError = await validateInputBodyReport.validateInputBodyReport(res, req.body, linkApi, userId)
        if (dataError === undefined) {

          reportData.gameId = gameId,
          reportData.title = title,
          reportData.server_location = serverLocation,
          reportData.fraudster = fraudster,
          reportData.reporter = reporter,
          reportData.description = description,
          reportData.last_update_user_id = userId
          reportData.updated_at = new Date()
          await reportData.save()

          const result = {
            id: reportData.id,
            gameId: reportData.game_id,
            title: reportData.title,
            serverLocation: reportData.server_location,
            fraudster: reportData.fraudster,
            reporter: reportData.reporter,
            description: reportData.description,
            delStatus: reportData.del_status
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
