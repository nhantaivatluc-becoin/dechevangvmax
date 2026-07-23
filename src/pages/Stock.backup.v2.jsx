import "./Stock.css";


import {
useState,
useEffect
} from "react";


import {
useWallet
} from "../context/WalletContext";



export default function Stock(){


const {

wallet,

setWallet

}=useWallet();



const [price,setPrice]=useState(12500);



const stocks=[


{

id:1,

name:"GOLD BASIC",

price:1000,

vip:0,

icon:"🪙"

},


{

id:2,

name:"VMAX PRO",

price:50000,

vip:3,

icon:"📈"

},


{

id:3,

name:"DE CHE VANG VIP",

price:500000,

vip:5,

icon:"👑"

},


{

id:4,

name:"GLOBAL KING",

price:5000000,

vip:10,

icon:"💎"

}



];





useEffect(()=>{


const timer=setInterval(()=>{


setPrice(

p=>

p+(Math.random()-0.5)*200

);


},3000);



return()=>clearInterval(timer);



},[]);





const buy=(stock)=>{


if(wallet.gold < stock.price){


alert("Không đủ GOLD");


return;


}



if((wallet.vip||0)<stock.vip){


alert(

"Cần VIP "+stock.vip

);


return;


}



setWallet({


...wallet,


gold:

wallet.gold-stock.price,


stocks:[

...(wallet.stocks||[]),

stock.name

]


});



};






return(


<div className="stock-page">



<h1>

📈 DECHEVANG STOCK

</h1>



<div className="market">


<h2>

🪙 GOLD INDEX

</h2>


<div className="stock-price">

{price.toFixed(2)}

</div>


<p>

Realtime Market

</p>


</div>





<h2>

🏦 CỔ PHIẾU

</h2>



<div className="stock-list">


{

stocks.map(stock=>(



<div

className="stock-item"

key={stock.id}

>



<h3>

{stock.icon}

{stock.name}

</h3>



<p>

💰 Giá:

{stock.price.toLocaleString()}

GOLD

</p>




<p>

👑 VIP yêu cầu:

{stock.vip}

</p>



<button

onClick={()=>buy(stock)}

>

MUA CỔ PHIẾU

</button>




</div>



))


}



</div>





<div className="portfolio">


💼 Danh mục:


<br/>


{

(wallet.stocks||[]).map((s,i)=>(

<p key={i}>

{s}

</p>

))


}


</div>




</div>


)


}
