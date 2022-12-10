"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contrato extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Contrato.hasMany(models.Imovel, { foreignKey: "imovelId" });
    }
  }
  Contrato.init(
    {
      enderecoBlockchain: DataTypes.STRING,
      imovelId: DataTypes.INTEGER,
      duracao: DataTypes.DATE,
      tipo: DataTypes.STRING,
      ultimaFiscalizacao: DataTypes.DATE,
      proximaFiscalizacao: DataTypes.DATE,
      cobrancaArrecadacao: DataTypes.STRING,
      ultimaCobranca: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Contrato",
      tableName: "contratos",
      timestamps: false,
    }
  );
  return Contrato;
};
