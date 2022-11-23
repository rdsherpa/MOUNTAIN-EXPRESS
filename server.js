const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const sequelize = require("./config/connection");
//const SequelizeStore = require("connect-session-sequelize")(session.Store);
const hbs = exphbs.create ({defaultLayout: "main"})

// middleware
const app = express();
const PORT = process.env.PORT || 3001;

// need to set up cookeies, secret

// const helpers

// const hbs

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require("./controllers/site-controller.js"));
app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")

//sequelize.sqnc({ force: false }).then(() => {
  app.listen(PORT, () => console.log("app is now listening"));
//});
