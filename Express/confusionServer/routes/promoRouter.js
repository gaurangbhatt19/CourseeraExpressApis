const express= require('express');
const router=express.Router();


router.route("").get((req,res)=>{
    res.send("GET promotions"); 
}).post((req,res)=>{
    res.send("POST promotions");

}).delete((req,res)=>{
    res.send("DELETE promotions");

}).put((req,res)=>{
    res.send("PUT promotions");

});



router.route("/:promoId").get((req,res)=>{
    res.send("Promo ID: "+req.params.promoId); 
}).post((req,res)=>{
    res.send("Added Promo ID: "+req.params.promoId );

}).delete((req,res)=>{
    res.send(" Deleting Promo of ID: "+req.params.promoId );

}).put((req,res)=>{
    res.send("Updating Promo ID to : "+req.params.promoId);

});
module.exports=router;