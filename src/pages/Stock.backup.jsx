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

addGold

}=useWallet();



const [price,setPrice]=useState(12500);

const [percent,setPercent]=useState(0);



useEffect(()=>{


const timer=setInterval(()=>{


const change=(Math.random()-0.5)*100;


setPrice(p=>p+change);


setPercent(change/10);



},3000);



return()=>clearInterval(timer);



},[]);





return(


<div className="stock-page">


<h1>

📈 DECHEVANG STOCK

</h1>



<div className="stock-box">


<h2>

GOLD INDEX

</h2>


<div className="stock-price">

{price.toFixed(2)}

</div>


<div className={percent>=0?"up":"down"}>

{percent>=0?"▲":"▼"}

{percent.toFixed(2)}%

</div>


</div>





<div className="stock-chart">


📊 📈 📉 📈 📊


</div>




<div className="stock-wallet">


🪙 GOLD:

{Number(wallet.gold).toLocaleString()}



</div>




<button

onClick={()=>addGold(100)}

>

MUA CỔ PHIẾU +100 GOLD

</button>



</div>


)


}
