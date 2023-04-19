// helpers
const { internalServerError } = require('@helpers/errorResponse')
// query
const { queryGetOneReport } = require('@query/reports/findOne')
// library
const path = require(`path`);
const basePath = path.resolve();


module.exports = {
    retrieveImage: async (req, res) => {
        const userId = req.id
        const reportId = req.params.report_id
        const linkApi = `/api/web/report/${reportId} -show-`
        try {
            const reportData = await queryGetOneReport(linkApi, userId, reportId, res)
            const path = `${basePath}/images/report/${reportData.image === null?'img-report-null.jpg':reportData.image}`;
            return res.status(200).sendFile(path);
        } catch (error) {
            console.log(error)
            return internalServerError(res, error.message, linkApi, userId)
        }
    },
    
}
