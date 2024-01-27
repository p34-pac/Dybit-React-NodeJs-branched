const mongoose = require("mongoose");

const DybitSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    password: String
})

const DybitModel = mongoose.model("dybits", DybitSchema)
module.exports = DybitModel