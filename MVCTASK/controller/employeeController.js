const Employee = require("../models/employeeModel");

exports.getUser = async (req, res) => {
  try {
    const users = await Employee.find();
    res.render("index", { users });
  } catch (error) {
    console.log("Error fetching users:", error);
    res.status(500).send("Error fetching users");
  }
};

exports.showAddUser = (req, res) => {
  res.render("addUser");
};

exports.addUser = async (req, res) => {
  try {
    const { name, email, phone, password, company } = req.body;
    const newUser = new Employee({ name, email, phone, password, company });
    await newUser.save();
    res.redirect("/");
  } catch (error) {
    console.log("Error adding user:", error);
    res.status(500).send("Error adding user");
  }
};

exports.editUser = async (req, res) => {
  try {
    const user = await Employee.findById(req.params.id);
    res.render("editUser", { user });
  } catch (error) {
    console.log("Error fetching user for edit:", error);
    res.status(500).send("Error fetching user for edit");
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { name, email, phone, password, company } = req.body;
    await Employee.findByIdAndUpdate(req.params.id, { name, email, phone, password, company });
    res.redirect("/");
  } catch (error) {
    console.log("Error updating user:", error);
    res.status(500).send("Error updating user");
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (error) {
    console.log("Error deleting user:", error);
    res.status(500).send("Error deleting user");
  }
};
