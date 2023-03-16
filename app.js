const express = require("express");
const hbs = require("hbs");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
console.log(port);

//Handlebars
//para renderizar vistas sencillas
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//Servir contenido estatico
//se usan middlewares
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home", {
    nombre: "Joaquin Monge",
    titulo: "Curso de Node",
  });
});

app.get("/generic", function (req, res) {
  res.render("generic", {
    nombre: "Joaquin Monge",
    titulo: "Curso de Node",
  });
});
app.get("/elements", function (req, res) {
  res.render("elements", {
    nombre: "Joaquin Monge",
    titulo: "Curso de Node",
  });
});

app.get("*", function (req, res) {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
