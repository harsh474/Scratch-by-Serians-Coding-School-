const {Schema} = require("mongoose");
const mongoose = require("mongoose" ) ;
const productSchema = new Schema({ 
    name:String, 
    price:Number, 
    discount:{ 
        type:Number, 
        default:0
    },
    bgcolor : String,  
    panecolor: String, 
    textcolor:String, 
    image:String,
}) ;

module.exports = mongoose.model("product",productSchema);
