const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001; // Choose a port for your backend

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/user');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define the User schema and model
const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  referralCode: String,
  verificationCode: Number,
  password: String,
});

const User = mongoose.model('User', userSchema);

// the endpoint to handle user registration
app.post('/api/register', async (req, res) => {
try {
    const { fullName, email, referralCode, verificationCode, password } = req.body;

    // Check if a user with the same email already exists
    const existingUserEmail = await User.findOne({ email });
    if (existingUserEmail) {
    return res.status(400).json({ emailExists: true, message: 'Email already exists. Please use a different email address.' });
    }

    // Check if a user with the same fullName already exists
    const existingUserFullName = await User.findOne({ fullName });
    if (existingUserFullName) {
    return res.status(400).json({ fullNameExists: true, message: 'Full name already exists. Please choose a different full name.' });
    }

    // Create a new user
    const newUser = new User({ fullName, email, referralCode, verificationCode, password });

    // Save the user to the database
    await newUser.save();

    // Send a success response
    res.status(200).json({ message: 'User registered successfully' });
} catch (error) {
    console.error('Error during registration:', error.message);
    // Handle errors and send an appropriate response
    res.status(500).json({ error: 'Internal Server Error' });
}
});
  

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
