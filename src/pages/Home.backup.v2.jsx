import "./Home.css";

import {
useEffect,
useState
} from "react";


import {
useWallet
} from "../context/WalletContext";



export default function Home(){


const {

wallet,

addGold

}=useWallet();



const [mine,setMine]=useState(false);



useEffect(()=>{


const timer=setInterval(()=>{


addGold(0.5);



window.dispatchEvent(

new Event("gold-effect")

);



},60000);



return()=>clearInterval(timer);



},[]);





const startMine=()=>{


setMine(true);


addGold(0.5);



window.dispatchEvent(

new Event("gold-effect")

);



};





return(


<div className="home-page">



<div className="asset-item gold-box">


🪙 GOLD


<h2>

{Number(wallet.gold || 0).toLocaleString()}

</h2>



<div className="gold-rate">

+0.50 GOLD / phút

</div>


</div>




<div className="mine-area">



<div className="robot">


🤖

</div>



<h1>

ĐÀO VÀNG

</h1>



<button

onClick={startMine}

className="mine-button"

>


⛏ ĐÀO NGAY


</button>



{

mine &&

<p className="mine-active">

⛏ Robot đang đào vàng...

</p>


}



</div>




</div>


)

}
