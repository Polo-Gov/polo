const jwt = require("jsonwebtoken");
require("dotenv").config();

const unsureAuthenticated = (req, res, next) => {
  //Recebe o token inserido pela aplicação
  const authToken = req.headers.authorization;

  //Valida se o token está preenchido
  if (!authToken) {
    res.status(401).json({
      message: "Você precisa de um token para acessar essa ação",
    });
    return;
  }

  //Desestrutura o header "Bearer 'token'"
  [, token] = authToken.split(" ");

  //Valida se o token é válido
  try {
    //Verifica o Token
    const { sub } = jwt.verify(token, process.env.JWT_SECRET);

    //Recupera infos do usuário
    req.id = sub;
    return next();
  } catch (err) {
    //Retorna o erro caso o token não seja válido
    res.status(401).send("Usuário não autenticado");
    return;
  }
};

//Exporta como um MIDDLEWARE
module.exports = {
  unsureAuthenticated,
};
