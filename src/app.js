const express = require('express');
const app = express();
const port = 3003;
const swaggerui = require("swagger-ui-express");
const swaggerjsdoc = require("swagger-jsdoc");
const CarRoute = require("./routes/CarRoute");
const MotorcycleRoute = require("./routes/MotorcycleRoute");
const CsvRoute = require("./routes/CsvRoutes")



const mongoose = require ("mongoose");
mongoose.connect('mongodb://mongo/apivehicle')

app.use(express.urlencoded());
app.use(express.json());

CarRoute(app);
MotorcycleRoute(app);
CsvRoute(app);
const options = {
  definition:{
    openapi : "3.0.0",
    info : {
      title : "Librairy of vehicle",
      description : "Documentation de l'api du librairie de véhicule"
    },
    contact:{
      name: "Cecoule",
    },
    servers : [
      {
        url: "http://localhost:3003/api-docs"
      }
    ]
  },
  apis : ["./routes/*.js"]
}
const spacs = swaggerjsdoc(options)
app.use("/api-docs", swaggerui.serve, swaggerui.setup(spacs))
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })