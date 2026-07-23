import "./Portfolio.css";


import {

useEffect,

useState

} from "react";


import {

useWallet

} from "../context/WalletContext";






export default function Portfolio(){



const {


wallet,

sellStock,

updateStockPrice


}=useWallet();





const [,refresh]=useState(0);






useEffect(()=>{



const timer=setInterval(()=>{



wallet.stocks?.forEach(stock=>{



const move=

Number(

(

(Math.random()-0.5)*5

)

.toFixed(2)

);





updateStockPrice(

stock.code,

Number(

stock.price+move

)

);



});



refresh(x=>x+1);



},4000);





return()=>clearInterval(timer);



},[wallet.stocks]);











const totalBuy=

wallet.stocks?.reduce(

(sum,item)=>{


return sum+

(

item.average*

item.amount

);



},0

)||0;








const totalNow=

wallet.stocks?.reduce(

(sum,item)=>{


return sum+

(

item.price*

item.amount

);



},0

)||0;








const profit=

totalNow-totalBuy;






const percent=

totalBuy

?

(

profit/

totalBuy

*

100

)

.toFixed(2)

:

0;









return(



<div className="portfolio-page">





<h1>

💼 PORTFOLIO INVESTOR

</h1>






<div className="summary">



<h3>

💰 Vốn đầu tư

</h3>



<h2>

$

{

totalBuy.toLocaleString()

}

</h2>



</div>







<div className="summary">



<h3>

📈 Giá trị hiện tại

</h3>



<h2>

$

{

totalNow.toLocaleString()

}

</h2>



</div>








<div

className={

profit>=0

?

"profit green"

:

"profit red"

}


>



<h2>


{

profit>=0

?

"▲"

:

"▼"

}


{

profit.toFixed(2)

}

$

</h2>



<p>

{

percent

}%

</p>



</div>









<h2>

📊 Cổ phiếu sở hữu

</h2>







{

!wallet.stocks ||

wallet.stocks.length===0

?


<div className="empty">


Chưa có cổ phiếu

</div>


:



<div className="portfolio-list">



{


wallet.stocks.map(stock=>(



<div

className="stock-item"

key={stock.code}

>



<h2>

{stock.name}

</h2>




<h3>

{stock.code}

</h3>





<p>

Số lượng:

<b>

{stock.amount}

</b>

</p>





<p>

Giá mua:

<b>

${stock.average}

</b>

</p>





<p>

Giá hiện tại:

<b>

${stock.price}

</b>

</p>







<p>

Giá trị:

<b>

$

{

(

stock.price*

stock.amount

)

.toLocaleString()

}

</b>

</p>








<button

onClick={()=>sellStock(stock.code)}

>

💰 BÁN

</button>





</div>



))


}



</div>



}





</div>



)


}
