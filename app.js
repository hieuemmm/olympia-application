require('dotenv').config();
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const session = require('express-session');
const passport = require('passport');
const path = require('path');
const viewsPath = path.join(__dirname, "views")
const staticFilePath = path.join(__dirname, 'public');

//=========================================
const app = express();
const server = http.createServer(app);

// Middlewares
app.set('views', viewsPath);
app.set("view engine", "hbs");
app.use(express.static(staticFilePath))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'cats', resave: false, saveUninitialized: true })); //For Login
app.use(passport.initialize()); //For Login
app.use(passport.session()); //For Login


// Routes
// Import the router modules
const authRoutes = require("./routes/authRoutes");
const clientRoutes = require("./routes/clientRoutes");

// Use the router modules
app.use("/", clientRoutes);
app.use("/auth", authRoutes);

// Starting a server
server.listen(3000, () => {
  console.log(`The application started on port ${server.address().port}`);
});
