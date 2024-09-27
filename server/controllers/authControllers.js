// authControllers.js
const User = require("../models/Dybit");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require('jsonwebtoken');

const test = (req, res) => {
    res.json('test is working');
};

const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password, referralCode, phoneNumber } = req.body;

        // Check if all required fields are provided
        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ error: "First name, last name, email, and password are required" });
        }

        // Check password length
        if (password.length < 6) {
            return res.status(400).json({ error: "Password should be at least 6 characters long" });
        }

        // Generate a unique referral code
        const generatedReferralCode = await generateUniqueReferralCode();

        // Check if the referral code is provided and valid
        let referringUser;
        if (referralCode) {
            referringUser = await User.findOne({ referralCode });
            if (!referringUser) {
                return res.status(400).json({ error: "Referral code is invalid" });
            }
        }

        // Check if the email is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already exists" });
        }

        // Hash the password
        const hashedPassword = await hashPassword(password);

        // Create the new user
        const user = await User.create({
            firstName,
            phoneNumber,
            lastName,
            email,
            password: hashedPassword,
            referralCode: generatedReferralCode,
            referee: referringUser ? referringUser._id : null,
            balance: 0
        });

        // If there is a referring user, add $500 to their balance and update referred users list
        if (referringUser) {
            referringUser.balance += 500;
            referringUser.referredUsers.push(user._id); // Add the ID of the new user to referredUsers array
            await referringUser.save();
        }

        return res.status(201).json(user);
    } catch (error) {
        if (error.code === 11000 && error.keyPattern && error.keyPattern.email === 1) {
            // Duplicate email error
            return res.status(400).json({ error: "Email already exists" });
        }
        console.error("Error registering user:", error);
        return res.status(500).json({ error: "Server error during user registration" });
    }
};

// generate a unique referral code
const generateUniqueReferralCode = async () => {
    let referralCode;
    let isCodeUnique = false;
    while (!isCodeUnique) {
        referralCode = generateReferralCode();
        const existingUser = await User.findOne({ referralCode });
        if (!existingUser) {
            isCodeUnique = true;
        }
    }
    return referralCode;
};

// generate a random referral code
const generateReferralCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let referralCode = '';
    for (let i = 0; i < 8; i++) {
        referralCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return referralCode;
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

        // Generate JWT token
        jwt.sign({ email: user.email, id: user._id, name: user.name }, process.env.JWT_SECRET, {}, (err, token) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: "Error generating token" });
            }

            // Include user's balance in the response
            const responseData = {
                token,
                user: {
                    _id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    balance: user.balance // Include user's balance here
                }
            };

            res.cookie('token', token, { httpOnly: true }).json(responseData);
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
