const express= require('express');
const router=express.Router();

// Leader Route
router.route("/leaders").get((req,res)=>{
    res.send("GET Leader"); 
}).post((req,res)=>{
    res.send("POST Leader");

}).delete((req,res)=>{
    res.send("DELETE Leader");

}).put((req,res)=>{
    res.send("PUT Leader");

});

// LeaderID

router.route("/leaders/:leaderId").get((req,res)=>{
    res.send("Leader ID: "+req.params.leaderId); 
}).post((req,res)=>{
    res.send("Added Leader ID: "+req.params.leaderId );

}).delete((req,res)=>{
    res.send(" Deleting Leader of ID: "+req.params.leaderId );

}).put((req,res)=>{
    res.send("Updating Leader ID to : "+req.params.leaderId);

});
module.exports=router;