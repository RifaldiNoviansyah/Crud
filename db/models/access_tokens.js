

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class access_tokens extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  access_tokens.init({
    user_id: DataTypes.INTEGER,
    access_token: DataTypes.STRING,
    access_token_expired_at: DataTypes.DATE,
    refresh_token: DataTypes.STRING,
    del_status: DataTypes.BOOLEAN,
    created_user_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    last_update_user_id: DataTypes.INTEGER,
    updated_at: DataTypes.DATE,
    deleted_user_id: DataTypes.INTEGER,
    deleted_date_time: DataTypes.DATE,
  }, {
    sequelize,
    modelName: "access_tokens",
    underscored: true,
  });
  return access_tokens;
};
