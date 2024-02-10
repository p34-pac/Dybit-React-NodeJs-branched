// const express = require('express');
const User = require("../models/Dybit")
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require('jsonwebtoken')


const test = (req, res) => {
   res.json('test is working')
}

const registerUser = async (req, res) => {
    try {
        const { name, email,referralCode, password } = req.body;
        //check if name was entered or not
        if (!name) {
            return res.json({
                error: "Name is required"
            })
        }
        //check if password is good
        if (!password || password.length < 6) {
            return res.json({
                error: "Password is required and should be at least 6 characters long"
            })
        }
        const hashedPassword = await hashPassword(password)
        const exist = await User.findOne({ email });
        if (exist) {
            return res.json({
                error: "Email already exist"
            })
        }
        const user = await User.create({
            name, email, referralCode, password: hashedPassword,
        })
        return res.json(user)
    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        return res.status(500).json({ error: "Server error" }); // Return a generic server error message
    }
}

// login endpoint
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        //check if user exist
        const user = await User.findOne({ email }) 
        if (!user) {
            return res.json({
                error: "No user found. please enter the correct email"
            })
        }

        //check for password match
        const match = await comparePassword(password, user.password)
        if (match) {
            jwt.sign({ email: user.email, id: user._id, name: user.name }, process.env.JWT_SECRET, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json(user)
           })
        }
        if (!match) {
            res.json({
                error: 'password do not match'
            }) 
         }
    } catch (error) {
        console.log(error)
    }
}

const getProfile = (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(400).json({ error: "Token is missing" });
    }
    
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.error("JWT verification error:", err);
            return res.status(401).json({ error: "Invalid token" });
        }
        
        User.findById(user.id, (err, userDoc) => {
            if (err) {
                console.error("Error finding user:", err);
                return res.status(500).json({ error: "Server error" });
            }
            
            if (!userDoc) {
                return res.status(404).json({ error: "User not found" });
            }
            
            res.json(userDoc);
        });
    });
}

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile
}
