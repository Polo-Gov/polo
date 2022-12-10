"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("contratos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      enderecoBlockchain: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      duracao: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      imovelId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      tipo: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      ultimaFiscalizacao: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      proximaFiscalizacao: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      cobrancaArrecadacao: {
        type: Sequelize.STRING,
      },
      ultimaCobranca: {
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("contratos");
  },
};
