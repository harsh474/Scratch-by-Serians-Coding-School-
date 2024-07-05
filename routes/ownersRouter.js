const express = require("express");
const router = express.Router() ; 
const ownerModel = require("../models/owner-model") ; 



router.get('/',function(req,res){ 
    res.send("owner roter") ;
}) ;  
router.post('/',function(req,res){ 
    res.send("owner post router") ;
})

module.exports = router ;