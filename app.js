const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
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

// Routes
// Import the router modules
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const clientRoutes = require("./routes/clientRoutes");

// Use the router modules
app.use("/", clientRoutes);
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);

// Starting a server
server.listen(3000, () => {
  console.log(`The application started on port ${server.address().port}`);
});
