const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    referralLink: { type: String, unique: true },
    referredUsers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    balance: { type: Number, default: 0 },
    // accountNumber: { type: String, unique: true }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
