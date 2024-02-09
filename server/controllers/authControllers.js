// const express = require('express');
const User = require("../models/Dybit")
const { hashPassword, comparePassword } = require("../helpers/auth");

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
           res.json('password matched') 
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    test,
    registerUser,
    loginUser
}
