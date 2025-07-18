// model -> schema creation

const mongoose = require('mongoose');

const userSchema =  new mongoose.Schema({
    name :{
        type: String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
});

const User = mongoose.model("user",userSchema)

module.exports = User;