// helpers
const { internalServerError, success } = require('@helpers/errorResponse')
// query
const { queryGetOneReport } = require('@query/reports/findOne')

module.exports = {
  delete: async (req, res) => {
    const userId = req.id
    const reportId = req.params.report_id
    const linkApi = `/api/web/report/${reportId} -delete-`
    try {
      const reportData = await queryGetOneReport(linkApi, userId, reportId, res)
      if(reportData !== undefined){
            reportData.del_status = true
            reportData.deleted_date_time = new Date()
            await reportData.save()

          const result = {
            id: reportData.id,
            name: reportData.name,
            delStatus: reportData.del_status
          }
          return success(res, 'Delete Report Berhasil', result, linkApi, userId)
      }
    } catch (error) {
      console.log(error)
      return internalServerError(res, error.message, linkApi, userId)
    }
  }
}
