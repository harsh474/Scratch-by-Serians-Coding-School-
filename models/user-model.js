const { Schema,  mongoose  } = require("mongoose");

const userSchema = new Schema({ 
     fullname:String, 
     contact :String,
     email:String, 
     password: String,
     isadmin : Boolean, 
     orders:String,
     cart:[
        {
            typeof:Schema.Types.ObjectId, 
            ref:'Product',
        }
     ]
      
}); 
module.exports = mongoose.model("user",userSchema);
