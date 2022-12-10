"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("imoveis", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        type: Sequelize.STRING,
      },
      endereco: {
        type: Sequelize.STRING,
      },
      CEP: {
        type: Sequelize.STRING,
      },
      areaTotal: {
        type: Sequelize.INTEGER,
      },
      descricao: {
        type: Sequelize.STRING,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("imoveis");
  },
};
