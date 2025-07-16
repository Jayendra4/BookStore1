const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/employeeRoutes");

const app = express();
const PORT = 1000;

mongoose
  .connect("mongodb://127.0.0.1:27017/employee")
  .then(() => console.log("DB Connected successfully"))
  .catch((err) => console.log("Mongo Error", err));

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});
