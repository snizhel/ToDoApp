const mongoose = require("mongoose");

//schema for mongoose
const todoSchema = new mongoose.Schema({
  id:String,
  name:String,
  message:String,
  user:Object,
});


module.exports = todoSchema;
