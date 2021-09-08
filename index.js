const dishrouter=require("./routes/dishRouter");
const leaderrouter=require("./routes/leaderRouter");
const promorouter=require("./routes/promoRouter");

const express= require('express');
const app = express();
const port=3000 || process.env.PORT;
app.use("/dishes",dishrouter);
app.use("/leaders",leaderrouter);
app.use("/promotions",promorouter);
app.listen(port,()=>{
    console.log("Server Started");
})