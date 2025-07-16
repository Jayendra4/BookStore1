const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({


 name :{
        type: String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,

    },
    phone:{
        type:String,
        require:true,
        unique:true,

    },
    password:{
        type:String,
        required:true,
        unique:true,

    },
    company:{
        type:String,
        required:true,
    },
});

const Employee = mongoose.model("employee",employeeSchema);
module.exports = Employee;
