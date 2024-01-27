const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/User")


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/dybit");

app.post("/register", async (req, res) => {
    try {
        const dybits = await User.create(req.body);
        res.json(dybits);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(3009, () => {
    console.log("server is running.......")
})