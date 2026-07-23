import express from "express";

const router = express.Router();



// ===============================
// DATABASE GIẢ LẬP MARKET
// Sau này thay bằng API thật
// ===============================


let stocks = [


{
id:1,
name:"NVIDIA Corporation",
code:"NVDA",
country:"USA",
sector:"Technology",
price:180.25,
change:3.25
},


{
id:2,
name:"Apple Inc",
code:"AAPL",
country:"USA",
sector:"Technology",
price:215.50,
change:1.85
},


{
id:3,
name:"Microsoft",
code:"MSFT",
country:"USA",
sector:"Technology",
price:510.20,
change:-0.65
},


{
id:4,
name:"JPMorgan Chase Bank",
code:"JPM",
country:"USA",
sector:"Bank",
price:295.30,
change:2.45
},


{
id:5,
name:"Goldman Sachs",
code:"GS",
country:"USA",
sector:"Bank",
price:620.10,
change:1.20
},


{
id:6,
name:"HSBC Holdings",
code:"HSBC",
country:"UK",
sector:"Bank",
price:92.40,
change:-0.35
},


{
id:7,
name:"Toyota Motor",
code:"TM",
country:"Japan",
sector:"Automobile",
price:245.60,
change:1.10
},


{
id:8,
name:"Alibaba Group",
code:"BABA",
country:"China",
sector:"Commerce",
price:155.80,
change:2.80
},


{
id:9,
name:"FPT Corporation",
code:"FPT",
country:"Vietnam",
sector:"Technology",
price:135.50,
change:1.55
},


{
id:10,
name:"Vietcombank",
code:"VCB",
country:"Vietnam",
sector:"Bank",
price:72.80,
change:0.85
}


];





// ===============================
// LẤY TOÀN BỘ CỔ PHIẾU
// ===============================


router.get("/stocks",(req,res)=>{



stocks = stocks.map(stock=>{


const move = Number(

((Math.random()-0.5)*2)

.toFixed(2)

);



return {


...stock,


price:Number(

(stock.price + move)

.toFixed(2)

),


change:move,


time:new Date()

};


});




res.json({

success:true,

count:stocks.length,

data:stocks


});


});







// ===============================
// TÌM KIẾM
// /api/market/search?q=apple
// ===============================


router.get("/search",(req,res)=>{


const q=

(req.query.q || "")

.toLowerCase();




const result=stocks.filter(stock=>{


return (

stock.name+

stock.code+

stock.country+

stock.sector

)

.toLowerCase()

.includes(q);


});




res.json({

success:true,

data:result


});


});








// ===============================
// LỌC NGÀNH
// /api/market/sector/Bank
// ===============================


router.get("/sector/:name",(req,res)=>{


const result=

stocks.filter(

s=>s.sector===req.params.name

);



res.json({

success:true,

data:result


});


});







// ===============================
// CHI TIẾT CỔ PHIẾU
// /api/market/stock/NVDA
// ===============================


router.get("/stock/:code",(req,res)=>{


const stock=

stocks.find(

s=>s.code===req.params.code

);




if(!stock){


return res.status(404).json({

success:false,

message:"Không tìm thấy cổ phiếu"

});


}




res.json({

success:true,

data:stock


});


});







// ===============================
// BIỂU ĐỒ LỊCH SỬ
// ===============================


router.get("/chart/:code",(req,res)=>{


const stock=

stocks.find(

s=>s.code===req.params.code

);



if(!stock){

return res.status(404).json({

success:false

});

}




let chart=[];


let price=stock.price;



for(let i=30;i>=0;i--){



price +=

Number(

((Math.random()-0.5)*5)

.toFixed(2)

);



chart.push({

time:

new Date(

Date.now()-i*3600000

),


price:Number(price.toFixed(2))


});


}





res.json({

success:true,

code:stock.code,

chart


});


});





export default router;
