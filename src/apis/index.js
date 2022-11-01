const express = require("express");
const port = process.env.PORT | 3000;
const cors = require("cors");
const router = require("./routers/v1");

const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./swagger.json");

const app = express();

app.use(function(req, res, next) {
          res.setHeader('Access-Control-Allow-Origin', '*'); 
          res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
          res.setHeader('Access-Control-Allow-Credentials', true);
          next();
      });
      
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/v1", router);

app.listen(port, () =>
  console.log("APIS: API server conected on port: ", port)
);

module.exports = app;
