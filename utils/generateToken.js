
const jwt = require("jsonwebtoken");
const generateToken = (user)=>{ 
    let token = jwt.sign({id:user._id,email:user.email},process.env.SECRET_KEY) ; 
    return token ;
}
module.exports = generateToken ;