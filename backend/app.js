require("dotenv").config();
const express = require("express");
const connectToDB = require("./config/db");
const cors = require("cors");

const todosRoutes = require("./routes/todosRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

connectToDB();
app.use("/user", userRoutes);
app.use("/", todosRoutes);

module.exports = app;
