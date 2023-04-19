// helpers
const { internalServerError, success } = require('@helpers/errorResponse')
// query
const { queryGetOneReport } = require('@query/reports/findOne')

module.exports = {
  show: async (req, res) => {
    const userId = req.id
    const reportId = req.params.report_id
    const linkApi = `/api/web/report/${reportId} -show-`
    try {
      const reportData = await queryGetOneReport(linkApi, userId, reportId, res)
      if(reportData !== undefined){
        const result = {
            id: reportData.id,
            gameId: reportData.game_id,
            gameName: reportData.game_name,
            title: reportData.title,
            serverLocation: reportData.server_location,
            fraudster: reportData.fraudster,
            reporter: reportData.reporter,
            description: reportData.description,
            image: reportData.image,
            delStatus: reportData.del_status
        }
        
        return success(res, 'Menampilkan Detail Report Berhasil', result, linkApi, userId)
      }
    } catch (error) {
      console.log(error)
      return internalServerError(res, error.message, linkApi, userId)
    }
  }
}
