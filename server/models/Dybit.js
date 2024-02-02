const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  referralCode: String,
  verificationCode: Number,
  password: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
