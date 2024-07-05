const userModel = require("../models/user-model");
const jwt = require("jsonwebtoken");    
const bcrypt = require("bcrypt");  
const generateToken = require("../utils/generateToken");

module.exports.registerUser = async function(req,res){ 
    try {
        let {email,password,fullname} = req.body;  
        if(!email || !password || !fullname){
            return res.send("please fill all fields");
        } 
        // let user = await userModel.findOne({email}); 
        // if(user){ 
        //   return res.send("user already registered")
        // } 
        bcrypt.genSalt(10, function(err,salt){ 
            bcrypt.hash(password,salt,async function(err,hash){
               if(err) return res.send(err.message); 
                else { 
                    user = await userModel.create({email,password:hash,fullname}) ; 
                  let token = generateToken(user)  ; 
                  res.status(201).cookie("token",token).json({ 
                    message :"User registerd successfully",
                    user, 
                    
                  });
                }
            })
        })
       
    } catch (error) {
        console.log(error.message);
        res.send("error");
    }
}  ; 
module.exports.loginUser = async function(req,res){ 
     try {
        const {email,password} = req.body ; 
        const user  = await userModel.find(email) ; 
         if(!user){ 
            return res.status(402).send("User not found");
         } 
         const isMatch = await bcrypt.compare(password,user.password) ; 
         if(!isMatch){ 
            return res.send("Invalid credentials");
         } 
            let token = generateToken(user) ;
            res.status(200).cookie("token",token).json({ 
                message :"User login successfully",
                user,
            }) ; 
            // res.render("index") ;
     } catch (error) {
        
     }
};