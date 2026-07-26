import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import "./AppPages.css";


export default function StockDetail(){


const navigate=useNavigate();



const [quantity,setQuantity]=useState(1);



const stock={


name:"Apple Inc",

symbol:"AAPL",

price:213.45

};




const total=

(stock.price*quantity).toFixed(2);





return(


<div className="stock-page">



<h1>

📊 {stock.symbol}

</h1>




<div className="detail-card">


<h2>

{stock.name}

</h2>



<p>

Giá hiện tại

</p>



<strong className="big-price">

${stock.price}

</strong>



</div>








<div className="chart-box">


📈 BIỂU ĐỒ GIÁ REALTIME


<div className="chart-line">

〽〰〽〰〰〽

</div>


</div>








<div className="buy-box">


<h2>

MUA CỔ PHIẾU

</h2>



<label>

Số lượng

</label>



<input


type="number"


value={quantity}


min="1"


onChange={e=>setQuantity(e.target.value)}


/>





<p>

Tổng tiền:

</p>


<h2>

${total}

</h2>





<button

onClick={()=>navigate("/deposit")}

>


💰 NẠP TIỀN ĐỂ MUA


</button>



</div>







</div>


)


}

