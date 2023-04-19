const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    static associate(models) {
    }
  }
  users.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    status_login: DataTypes.BOOLEAN,
    del_status: DataTypes.BOOLEAN,
    created_user_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    last_update_user_id: DataTypes.INTEGER,
    updated_at: DataTypes.DATE,
    deleted_user_id: DataTypes.INTEGER,
    deleted_date_time: DataTypes.DATE,
  }, {
    sequelize,
    modelName: "users",
    underscored: true,
  });
  return users;
};
