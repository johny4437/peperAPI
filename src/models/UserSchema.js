const mongoose = require('mongoose');
const crypto = require('crypto');
const {v1:uuidv1} = require("uuid");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    password:{
      type:String,
      required:true,
  }
});



module.exports = mongoose.model("User", userSchema);