const { Schema,  mongoose  } = require("mongoose");

const userSchema = new Schema({ 
     fullname:{ 
        type:String,
        minLength:3,
        trim:true,
     },
     contact :String,
     email:String, 
     password: String,
     picture:String,
     order:{
        type:Array,
        default:[]
     }, 
     cart:{
        type:Array,
        default:[]
     },
      
}); 
module.exports = mongoose.model("user",userSchema);
