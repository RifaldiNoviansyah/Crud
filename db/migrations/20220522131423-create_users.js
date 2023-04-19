'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING
        },
        username: {
          type: Sequelize.STRING
        },
        password: {
          type: Sequelize.STRING
        },
        address: {
          type: Sequelize.STRING
        },
        status_login: {
          type: Sequelize.BOOLEAN,
          default: false
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
      await queryInterface.dropTable('users');
    }
};