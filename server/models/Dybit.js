const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String, 
    middleName: String,
    lastName: String, 
    email: { type: String, unique: true },
    password: String,
    referralCode: { type: String, unique: true },
    referee: { type: Schema.Types.ObjectId, ref: 'User' }, 
    referredUsers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    balance: { type: Number, default: 0 },
});

const User = mongoose.model('User', userSchema);
module.exports = User;