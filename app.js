const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Routes
const authRoutes = require("./server/routes/authRoutes");
const adminRoutes = require("./server/routes/adminRoutes");
const clientRoutes = require("./server/routes/clientRoutes");

// Middlewares
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Routes
app.use("/", clientRoutes);
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);

// PORT
const port = 3000;

// Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
