'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('games', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING
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
    await queryInterface.dropTable('games');
  }
};