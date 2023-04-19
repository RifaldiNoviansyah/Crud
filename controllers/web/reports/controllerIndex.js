// helpers
const { internalServerError, success } = require('@helpers/errorResponse')
// query
const { queryGetAllReports } = require('@query/reports/findAll')
// library

module.exports = {
  index: async (req, res) => {
    const userId = req.id
    const linkApi = '/api/web/report -index-'
    try {
      const reportDatas = await queryGetAllReports(linkApi, userId, res)
      if (reportDatas.length > 0) {
        const result = reportDatas.map((reportData) => ({
          id: reportData.id,
          gameId: reportData.game_id,
          gameName: reportData.games.name,
          title: reportData.title,
          serverLocation: reportData.server_location,
          fraudster: reportData.fraudster,
          reporter: reportData.reporter,
          description: reportData.description,
          image: reportData.image,
          delStatus: reportData.del_status
        }))
        return success(res, 'Menampilkan Semua Data Report Berhasil',result, linkApi, userId)
      } else {
        return success(res, 'Belum Ada Data Report', '0', linkApi, userId, 0)
      }
    } catch (error) {
      console.log(error)
      return internalServerError(res, error.message, linkApi, userId)
    }
  }
}
