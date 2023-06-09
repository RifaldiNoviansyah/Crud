'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('access_tokens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      access_token: {
        type: Sequelize.TEXT
      },
      access_token_expired_at: {
        type: Sequelize.DATE
      },
      refresh_token: {
        type: Sequelize.TEXT
      },
      del_status: {
        type: Sequelize.BOOLEAN,
        default: false
      },
      created_user_id: {
        type: Sequelize.INTEGER
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      last_update_user_id: {
        type: Sequelize.INTEGER
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleted_user_id: {
        type: Sequelize.INTEGER
      },
      deleted_date_time: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('access_tokens');
  }
};