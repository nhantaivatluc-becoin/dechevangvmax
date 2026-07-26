import React,{useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";
import "./AppPages.css";


export default function Stock(){


const navigate=useNavigate();


const [time,setTime]=useState(0);



useEffect(()=>{


const timer=setInterval(()=>{


setTime(
Math.floor(Math.random()*10)
);


},3000);


return()=>clearInterval(timer);


},[]);





const stocks=[


{
name:"Apple Inc",
symbol:"AAPL",
price:"$213.45",
change:"+2.4%"
},


{
name:"Microsoft",
symbol:"MSFT",
price:"$510.20",
change:"+1.8%"
},


{
name:"NVIDIA",
symbol:"NVDA",
price:"$185.30",
change:"+3.6%"
},


{
name:"Tesla",
symbol:"TSLA",
price:"$340.10",
change:"-0.8%"
},


{
name:"JPMorgan Chase",
symbol:"JPM",
price:"$290.50",
change:"+1.2%"
},


{
name:"Bank of America",
symbol:"BAC",
price:"$48.20",
change:"+0.6%"
},


{
name:"VinGroup",
symbol:"VIC",
price:"85.000 VNĐ",
change:"+1.5%"
}


];







return(


<div className="stock-page">



<h1>

📈 CHỨNG KHOÁN TOÀN CẦU

</h1>





<div className="market-status">


🟢 Thị trường đang hoạt động


<br/>

Cập nhật:

{time}

giây


</div>








<div className="invest-warning">


⚠ Muốn đầu tư cần nạp tiền vào ví trước


</div>









<div className="chart-box">


📊 BIỂU ĐỒ TĂNG GIẢM REALTIME


<div className="chart-line">

〽〰〰〽〰〽

</div>


</div>








{

stocks.map((stock,index)=>(



<div

className="stock-card"

key={index}

>



<div>


<h2>

{stock.symbol}

</h2>


<p>

{stock.name}

</p>


</div>





<div className="stock-price">


<strong>

{stock.price}

</strong>


<span>

{stock.change}

</span>


</div>





<button

onClick={()=>navigate("/deposit")}

>


💰 MUA CỔ PHIẾU


</button>




</div>


))


}





</div>


)


}

