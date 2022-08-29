const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
     name:{
        type:String,
        required:true
     },
     email:{
        type:String,
        required:true,
        unique:true
     },
     gender:String,
     status:String,
})

const userdb = mongoose.model("Userdb",UserSchema);


module.exports = userdb;