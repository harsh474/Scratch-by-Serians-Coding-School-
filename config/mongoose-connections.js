const mongoose = require('mongoose');  
const PORT =  process.env.PORT || 4000;
// require("dotenv").config(); 
const express = require("express"); 
const app = express(); 
const dbgr = require("debug")("development:mongoose");

// Inside your MongoDB connection promise:
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB database connection established");
        // dbgr("MongoDB database connection established");
    })
    .catch((err) => {
        console.error("Error connecting with the MongoDB database:", err);
    });


module.exports = mongoose.connection ;   