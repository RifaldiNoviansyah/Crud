const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class reports extends Model {
    static associate(models) {
      this.belongsTo(models.games, { foreignKey: "game_id", targetKey: "id", as: "games" });
    }
  }
  reports.init({
    game_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    server_location: DataTypes.STRING,
    fraudster: DataTypes.STRING,
    reporter: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    del_status: DataTypes.BOOLEAN,
    created_user_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    last_update_user_id: DataTypes.INTEGER,
    updated_at: DataTypes.DATE,
    deleted_user_id: DataTypes.INTEGER,
    deleted_date_time: DataTypes.DATE,
  }, {
    sequelize,
    modelName: "reports",
    underscored: true,
  });
  return reports;
};
