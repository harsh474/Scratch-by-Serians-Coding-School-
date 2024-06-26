const express = require("express");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser"); 
const ejs = require('ejs');
const path = require('path');
const db = require('./config/mongoose-connections');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// CORS middleware setup
app.use(cors({ origin: 'http://localhost:4000', credentials: true })); 

app.use(cors({ origin: 'http://localhost:4000', credentials: true }));

// Set the view engine to EJS
app.set('view engine', 'ejs');
// app.engine('ejs', ejs.renderFile); 
// Set the views directory
app.set('views', path.resolve('./view')); 


// npm install express dotenv cors mongoose cookie-parser ejs  sue - this to install all dependencies

