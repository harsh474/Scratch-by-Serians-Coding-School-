const mongoose = require('mongoose');  
const PORT =  process.env.PORT || 4000;
// require("dotenv").config(); 
const express = require("express"); 
const app = express();
// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB database connection established");
        app.listen(PORT, () => console.log(`Listening on port: ${PORT}!`));
    })
    .catch((err) => {
        console.log("Error connecting with the MongoDB database: " + err);
    }); 


module.exports = mongoose.connection ;   