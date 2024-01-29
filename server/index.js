const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/register', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Define the schema
const signupSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  referralCode: String,
  verificationCode: Number,
  password: String,
});

const SignupModel = mongoose.model('register', signupSchema);

app.use(cors());
app.use(bodyParser.json());

// API endpoint to handle form submission
app.post('/api/register', async (req, res) => {
  try {
    const formData = req.body;

    // Check for existing email
    const existingSignup = await SignupModel.findOne({ email: formData.email });
    if (existingSignup) {
      return res.status(400).json({ error: 'Email already exists. Please use a different email address.' });
    }

    // Create a new signup document
    const newSignup = new SignupModel(formData);
    await newSignup.save();

    res.status(200).json({ message: 'Registration successful!' });
  } catch (error) {
    console.error('Error during registration:', error.message);
    res.status(500).json({ error: 'An error occurred. Please try again or contact support.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
