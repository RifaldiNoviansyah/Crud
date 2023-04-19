const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class games extends Model {
    static associate(models) {
      this.hasMany(models.reports, { foreignKey: "game_id", sourceKey: "id", as: "reports" });
    }
  }
  games.init({
    name: DataTypes.STRING,
    del_status: DataTypes.BOOLEAN,
    created_user_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    last_update_user_id: DataTypes.INTEGER,
    updated_at: DataTypes.DATE,
    deleted_user_id: DataTypes.INTEGER,
    deleted_date_time: DataTypes.DATE,
  }, {
    sequelize,
    modelName: "games",
    underscored: true,
  });
  return games;
};
