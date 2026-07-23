require("dotenv").config();


const express = require("express");

const cors = require("cors");




// ROUTES

const authRoutes = require("./routes/auth");

const telegramRoutes = require("../routes/telegram");






const app = express();





app.use(cors());


app.use(express.json());







// AUTH

app.use("/api/auth", authRoutes);




// TELEGRAM SYNC

app.use("/api/telegram", telegramRoutes);









app.get("/",(req,res)=>{


res.json({


success:true,


name:"DECHEVANGVMAX API",


status:"online"


});


});









const PORT = process.env.PORT || 3000;





app.listen(PORT,()=>{


console.log(

"DECHEVANGVMAX API running port "+PORT

);


});








// TELEGRAM BOT

require("./telegram/bot");


// RANKING CRON

require("./telegram/rankingCron");



