const express = require("express");
require("express-async-errors");
require("dotenv").config();
var bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json()); //Irá suportar JSON
app.use(
  bodyParser.urlencoded({
    // Irá suportar urlenconded
    extended: true,
  })
);

const PORT = process.env.PORT || 3001;

const contratoRouter = require("./router/contratos.js");
const userRouter = require("./router/user.js");
const imovelRouter = require("./router/imovel.js");
const factoryRouter = require("./router/factory.js");
//connect to db

app.use("/contrato/", contratoRouter);
app.use("/user/", userRouter);
app.use("/imovel/", imovelRouter);
app.use("/factory/", factoryRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
