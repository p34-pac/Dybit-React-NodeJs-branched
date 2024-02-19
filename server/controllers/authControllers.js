// authControllers.js
const User = require("../models/Dybit");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require('jsonwebtoken');

const test = (req, res) => {
   res.json('test is working');
};

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ error: "Name, email, and password are required" });
        }
        if (password.length < 6) {
            return res.status(400).json({ error: "Password should be at least 6 characters long" });
        }
        const hashedPassword = await hashPassword(password);
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already exists" });
        }
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            balance: 0
        });
        return res.status(201).json(user);
    } catch (error) {
        if (error.code === 11000 && error.keyPattern && error.keyPattern.email === 1) {
            // Duplicate email error
            return res.status(400).json({ error: "Email already exists" });
        }
        console.error(error);
        return res.status(500).json({ error: "Server error during user registration" });
    }
};


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                error: "No user found with this email address."
            });
        }

        const match = await comparePassword(password, user.password);

        if (!match) {
            return res.status(400).json({
                error: 'Incorrect password'
            });
        }

        jwt.sign({ email: user.email, id: user._id, name: user.name }, process.env.JWT_SECRET, {}, (err, token) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: "Error generating token" });
            }
            res.cookie('token', token, { httpOnly: true }).json({ token, user });
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server error during login" });
    }
};

const getProfile = async (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(400).json({ error: "Token is missing" });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const userDoc = await User.findById(decodedToken.id);
        
        if (!userDoc) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json(userDoc);
    } catch (error) {
        console.error("Error fetching user profile:", error);
        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({ error: "Invalid token" });
        }
        return res.status(500).json({ error: "Server error" });
    }
};


module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile
};
