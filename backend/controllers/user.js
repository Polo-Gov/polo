const user = require("../services/user");
const User = new user.user();

function createUser(req, res) {
  //create user
  const { name, email, pass } = req.body;

  User.createUser(name, email, pass)
    .then((resul) => {
      res.status(200).send({ message: resul.messsage });
    })
    .catch((err) => {
      res.status(400).send({ error: err.message });
    });
}

function authenticateUser(req, res) {
  //authenticate user
  const { email, pass } = req.body;
  User.authenticateUser(email, pass)
    .then((user) => {
      res.send(200, user);
    })
    .catch((err) => {
      res.status(400).send({ error: err.message });
    });
}

module.exports = {
  createUser,
  authenticateUser,
};
