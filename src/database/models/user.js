import mongoose from 'mongoose';

//create schema
var userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

export default userSchema;
