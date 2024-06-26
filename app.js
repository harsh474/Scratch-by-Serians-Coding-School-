const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser"); 
const ejs = require('ejs');
const path = require('path');
const mongoose = require('mongoose');  
const db = require('./config/mongoose-connections');

const app = express();
const PORT = process.env.PORT || 5000;
// Routes
const ownersRouter = require("./routes/ownersRouter"); 
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// CORS middleware setup
app.use(cors({ origin: 'http://localhost:4000', credentials: true })); 

// Set the view engine to EJS
app.set('view engine', 'ejs');
// Set the views directory
app.set('views', path.resolve('./view')); 



app.get('/', (req, res) => {
    res.send("Hello World");
}); 


app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
}); 

