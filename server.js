import express from "express";
import cors from "cors";



const app = express();



// =====================
// Middleware
// =====================

app.use(cors());

app.use(express.json());




// =====================
// Market API
// =====================

import marketRoute from "./routes/market.js";

app.use("/api/market", marketRoute);





// =====================
// Các route khác
// =====================


try{

const {default:authRoute}=await import("./routes/auth.js");

app.use("/api/auth",authRoute);


}catch(e){

console.log("AUTH ROUTE CHUA CO");

}



try{

const {default:wheelRoute}=await import("./routes/wheel.js");

app.use("/api/wheel",wheelRoute);


}catch(e){

console.log("WHEEL ROUTE CHUA CO");

}



try{

const {default:farmRoute}=await import("./routes/farm.js");

app.use("/api/farm",farmRoute);


}catch(e){

console.log("FARM ROUTE CHUA CO");

}



try{

const {default:vipRoute}=await import("./routes/vip.js");

app.use("/api/vip",vipRoute);


}catch(e){

console.log("VIP ROUTE CHUA CO");

}



try{

const {default:walletRoute}=await import("./routes/wallet.js");

app.use("/api/wallet",walletRoute);


}catch(e){

console.log("WALLET ROUTE CHUA CO");

}





// =====================
// Test server
// =====================


app.get("/",(req,res)=>{


res.json({

status:"DECHEVANGVMAX ONLINE",

market:"ACTIVE"

});


});






// =====================
// Error
// =====================


app.use((err,req,res,next)=>{


console.log(err);


res.status(500).json({

error:true,

message:err.message

});


});






const PORT=3000;



app.listen(PORT,()=>{


console.log(`

🚀 SERVER RUNNING

http://localhost:${PORT}

🌎 MARKET:
http://localhost:${PORT}/api/market/stocks


`);


});
