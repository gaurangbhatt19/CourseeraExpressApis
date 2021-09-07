const express= require('express');
const router=express.Router();
router.route("/dishes/:dishId").get((req,res)=>{
    res.send("Dish ID: "+req.params.dishId);


}).post((req,res)=>{
    res.send("Added Dish ID: "+req.params.dishId);

}).delete((req,res)=>{
    res.send(" Deleting Dish of ID: "+req.params.dishId);

}).put((req,res)=>{
    res.send("Updating Dish ID to : "+req.params.dishId);

});

module.exports=router;
