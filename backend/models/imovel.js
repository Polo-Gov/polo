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
      cep: DataTypes.STRING,
      logradouro: DataTypes.STRING,
      numero: DataTypes.STRING,
      bairro: DataTypes.STRING,
      cidade: DataTypes.STRING,
      estado: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Imovel",
      tableName: "imoveis",
      timestamps: false,
    }
  );
  return Imovel;
};
