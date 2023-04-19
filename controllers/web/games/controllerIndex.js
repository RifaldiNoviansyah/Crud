// helpers
const { internalServerError, success } = require('@helpers/errorResponse')
// query
const { queryGetAllGames } = require('@query/games/findAll')

module.exports = {
  index: async (req, res) => {
    const userId = req.id
    const linkApi = '/api/web/games -index-'
    try {
      const userDatas = await queryGetAllGames(linkApi, userId, res)
      if (userDatas.length > 0) {
        const result = userDatas.map((userData) => ({
          id: userData.id,
          name: userData.name,
          delStatus: userData.del_status
        }))
        return success(res, 'Menampilkan Semua Data Game Berhasil',result, linkApi, userId)
      } else {
        return success(res, 'Belum Ada Data Game', '0', linkApi, userId, 0)
      }
    } catch (error) {
      console.log(error)
      return internalServerError(res, error.message, linkApi, userId)
    }
  }
}
