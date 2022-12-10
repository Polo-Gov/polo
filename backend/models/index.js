const Sequelize = require("sequelize");

const db = new Sequelize({
  dialect: "sqlite",
  storage: "./teste.db",
});

db.users = require("./user")(db, Sequelize);
db.contratos = require("./contrato")(db, Sequelize);
db.imoveis = require("./imovel")(db, Sequelize);

module.exports = db;
