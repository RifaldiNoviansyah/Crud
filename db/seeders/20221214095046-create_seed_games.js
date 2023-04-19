

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("games", [
      {
        id: 1,
        name: "Mobile Legend",
        del_status: false,
        created_user_id: 0,
        created_user_id: new Date(),
        last_update_user_id: 0,
        updated_at: new Date(),
        deleted_user_id: null,
        deleted_date_time: null,
      },
      {
        id: 2,
        name: "Free Fire",
        del_status: false,
        created_user_id: 0,
        created_user_id: new Date(),
        last_update_user_id: 0,
        updated_at: new Date(),
        deleted_user_id: null,
        deleted_date_time: null,
      },
      {
        id: 3,
        name: "PUBG Mobile",
        del_status: false,
        created_user_id: 0,
        created_user_id: new Date(),
        last_update_user_id: 0,
        updated_at: new Date(),
        deleted_user_id: null,
        deleted_date_time: null,
      },
      {
        id: 4,
        name: "CODM",
        del_status: false,
        created_user_id: 0,
        created_user_id: new Date(),
        last_update_user_id: 0,
        updated_at: new Date(),
        deleted_user_id: null,
        deleted_date_time: null,
      },
      {
        id: 5,
        name: "Gensin Impact",
        del_status: false,
        created_user_id: 0,
        created_user_id: new Date(),
        last_update_user_id: 0,
        updated_at: new Date(),
        deleted_user_id: null,
        deleted_date_time: null,
      },
      {
        id: 6,
        name: "Arena Of Valor",
        del_status: false,
        created_user_id: 0,
        created_user_id: new Date(),
        last_update_user_id: 0,
        updated_at: new Date(),
        deleted_user_id: null,
        deleted_date_time: null,
      },
      {
        id: 7,
        name: "LOL Wild Rift",
        del_status: false,
        created_user_id: 0,
        created_user_id: new Date(),
        last_update_user_id: 0,
        updated_at: new Date(),
        deleted_user_id: null,
        deleted_date_time: null,
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("games", null, {});
  },
};
