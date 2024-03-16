require("dotenv").config();
const router = require("./routes/index");
const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors");
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swaggerdoc.json");
//mongod --dbpath C:\data\db
const app = express();
app.use(cors());
const PORT = 5001;
app.use(express.json());
app.use("/api", router);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// const start = async () => {
//   try {
//     await sequelize.authenticate();
//     await sequelize.sync({ logging: false });
//     app.listen(5001, () => {
//       console.log("Сервер запущен на порту 5001");
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };

// start();

// var mongoose = require("mongoose");
// var mongoDB = "mongodb://127.0.0.1/Spasibo";
// mongoose.connect(mongoDB);
// mongoose.Promise = global.Promise;
// var db = mongoose.connection;
// db.on("error", console.error.bind(console, "MongoDB connection error:"));

const server = app.listen(PORT, () => {
  //  console.log("Ты, чей код проникает во все уголки виртуального мира,");
  //  console.log("Будь благословен, о, владыка переменных и функций!");
  //  console.log(
  //    "Пусть твои условия будут всегда истинными, и твои циклы бесконечными."
  //  );
  //  console.log("Помоги мне избежать ошибок и неисправностей,");
  //  console.log(
  //    "Как ты управляешь вселенной своими командами, так и я прошу твоей помощи в своем коде."
  //  );
  //  console.log(
  //    "Даруй мне умение разгадывать ошибки и создавать эффективный код."
  //  );
});

//sequelize.sync();
sequelize
  .authenticate()
  .then(() => console.log("Connected successfully!!!"))
  .catch((err) => console.log("Error!!!"));

module.exports = server;
