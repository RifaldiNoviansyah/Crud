const {
    log_history_hit_apis: logHistoryHitApiModels
  } = require('@models')
  
  const IP = require('ip')
  const geoip = require('geoip-lite')
  
  module.exports = {
    logHistoryHitApi: async (linkApi, userId, data, statusCode) => {
      try {
        const ipAddress = IP.address()
        const geo = geoip.lookup(ipAddress)
  
        await logHistoryHitApiModels.create({
          user_id: userId,
          time_hit_api: new Date(),
          api_name: linkApi,
          city_name: geo === null ? null : geo.city,
          country_name: geo === null ? null : geo.country,
          ip_address: ipAddress,
          status_code: statusCode,
          data,
          del_status: false,
          created_user_id: 0,
          created_at: new Date(),
          last_update_user_id : userId,
          updated_at : new Date()
        })
      } catch (error) {
        console.log('##Error logHistoryUser function', error)
      }
    }
  }
  