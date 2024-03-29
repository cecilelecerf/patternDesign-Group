const express = require('express');
const app = express();
const port = 3003;
const swaggerui = require("swagger-ui-express");
const swaggerjsdoc = require("swagger-jsdoc")

const mongoose = require ("mongoose");
mongoose.connect('mongodb://mongo/apinode')

app.use(express.urlencoded());
app.use(express.json());


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
        url: "http://localhost:3003/"
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