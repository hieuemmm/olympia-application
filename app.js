require("dotenv").config();
const express = require("express");
const handlebars = require("express-handlebars");
const http = require("http");
const bodyParser = require("body-parser");
const session = require("express-session"); //For Login
const passport = require("passport");
const path = require("path");
const viewsPath = path.join(__dirname, "views");
const staticFilePath = path.join(__dirname, "public");
const routes = require("./routes");

//=========================================
const app = express();
const server = http.createServer(app);

// Template Engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views/layouts"),
  })
);
app.set("view engine", "hbs");
app.set("views", viewsPath);

// Static Files
app.use(express.static(staticFilePath));

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//For Login
app.use(session({ secret: "cats", resave: false, saveUninitialized: true })); //For Login
app.use(passport.initialize()); //For Login
app.use(passport.session()); //For Login

// Routes initialize
routes(app);

// Starting a server
server.listen(3000, () => {
  console.log(`The application started on port ${server.address().port}`);
});
