const express = require('express');
const dotenv = require("dotenv").config();
const cors = require("cors");
const mongoose  = require("mongoose");
const cookieParser = require('cookie-parser');

const app = express();

mongoose.connect(process.env.MONGOOSE_URL)
  .then(() => console.log("Database connected.."))
  .catch((err) => console.error("Database connection error:", err.message));

  
// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// authRoutes file defines routes related to authentication
app.use("/", require("./routes/authRoutes"));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
