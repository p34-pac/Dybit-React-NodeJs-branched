const express = require('express');
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose")
const app = express();

mongoose.connect(process.env.MONGOOSE_URL)
  .then(() => console.log("Database connected.."))
  .catch(() => console.log("Databse not connected"))

// middleware
app.use(express.json())



// Assuming your authRoutes file defines routes related to authentication
app.use("/", require("./routes/authRoutes"));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
