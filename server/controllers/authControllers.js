// authControllers.js
const User = require("../models/Dybit");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require('jsonwebtoken');

const test = (req, res) => {
   res.json('test is working');
};

// Generate Referral Link
const generateReferralLink = async (referralCode) => {
    if (referralCode) {
        return `http://localhost:3000/register?ref=${referralCode}`;
    } else {
        let referralLink;
        do {
            const referralCode = Math.random().toString(36).substring(7);
            referralLink = `http://localhost:3000/register?ref=${referralCode}`;
            const existingUser = await User.findOne({ referralCode: null });
            if (!existingUser) {
                break;
            }
        } while (true);
        return referralLink;
    }
};


const registerUser = async (req, res) => {
    try {
        const { name, email, password, referralCode } = req.body;
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
        const referralLink = await generateReferralLink(referralCode);
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            referralLink,
            balance: 0
        });
        return res.status(201).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server error" });
    }
};

const trackReferral = async (referralCode, referredUserId) => {
    try {
        const referrer = await User.findOne({ referralLink: `http://localhost:3000/register?ref=${referralCode}` });
        if (referrer) {
            referrer.referredUsers.push(referredUserId);
            await referrer.save();
        }
    } catch (error) {
        console.error(error);
    }
};

const rewardReferrer = async (referralCode) => {
    try {
        const referrer = await User.findOne({ referralLink: `http://localhost:3000/register?ref=${referralCode}` });
        if (referrer) {
            referrer.balance += 5;
            await referrer.save();
        }
    } catch (error) {
        console.error(error);
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password, referralCode } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.json({
                error: "No user found. Please enter the correct email."
            });
        }

        const match = await comparePassword(password, user.password);

        if (match) {
            if (referralCode) {
                await trackReferral(referralCode, user._id);
                await rewardReferrer(referralCode);
            }

            jwt.sign({ email: user.email, id: user._id, name: user.name }, process.env.JWT_SECRET, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json(user);
            });
        } else {
            res.json({
                error: 'Password does not match'
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server error" });
    }
};

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
};

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile
};
