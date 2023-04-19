// helpers
const { badInput } = require('@helpers/errorResponse')

module.exports = {
  validateInputBodyReport: async (res, body, linkApi, userId) => {
    if (body.gameId === null || body.gameId.length === 0) return [false, badInput(res, 'Game Tidak boleh kosong', body.gameId, linkApi, userId)]
    if (body.title === null || body.title.length === 0) return [false, badInput(res, 'Title Tidak boleh kosong', body.title, linkApi, userId)]
    if (body.serverLocation === null || body.serverLocation.length === 0) return [false, badInput(res, 'Server Location Tidak boleh kosong', body.serverLocation, linkApi, userId)]
    if (body.fraudster === null || body.fraudster.length === 0) return [false, badInput(res, 'Fraudster boleh kosong', body.fraudster, linkApi, userId)]
    if (body.reporter === null || body.reporter.length === 0) return [false, badInput(res, 'reporter Tidak boleh kosong', body.reporter, linkApi, userId)]
    if (body.description === null || body.description.length === 0) return [false, badInput(res, 'Description Tidak boleh kosong', body.description, linkApi, userId)]
  }
}
