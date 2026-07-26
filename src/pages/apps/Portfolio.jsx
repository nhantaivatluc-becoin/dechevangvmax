import React from "react";
import "./AppPages.css";


export default function Portfolio(){



const list=[


{

symbol:"AAPL",

amount:0,

profit:"0%"

},


{

symbol:"BTC",

amount:0,

profit:"0%"

}



];





return(


<div className="stock-page">



<h1>

📂 DANH MỤC ĐẦU TƯ

</h1>





<div className="portfolio-total">


<h2>

Tổng tài sản đầu tư

</h2>


<strong>

0 VNĐ

</strong>


</div>








{

list.map((item,index)=>(


<div

className="stock-card"

key={index}

>


<div>


<h2>

{item.symbol}

</h2>


<p>

Số lượng: {item.amount}

</p>


</div>




<div>


<span>

Lợi nhuận

</span>


<strong>

{item.profit}

</strong>


</div>



</div>


))


}







</div>


)


}

