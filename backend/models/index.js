const Sequelize = require("sequelize");

const db = new Sequelize({
  dialect: "sqlite",
  storage: "./teste.db",
});

db.users = require("./user")(db, Sequelize);

module.exports = db;
