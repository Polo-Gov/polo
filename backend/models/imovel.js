"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Imovel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Imovel.hasMany(models.Contrato, { foreignKey: "imovelId" });
    }
  }
  Imovel.init(
    {
      nome: DataTypes.STRING,
      endereco: DataTypes.STRING,
      CEP: DataTypes.STRING,
      areaTotal: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Imovel",
      tableName: "imoveis",
    }
  );
  return Imovel;
};
