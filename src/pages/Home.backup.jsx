import "./Home.css";

import Header from "../components/Header";
import UserAvatar from "../components/UserAvatar";
import MarketChart from "../components/MarketChart";
import MiningEffect from "../components/MiningEffect";

import {
useGame
} from "../store/GameStore";


export default function Home(){


const {

gold,

diamond,

cashValue,

mineGold,

vip

}=useGame();





const handleMine=()=>{


mineGold();


window.dispatchEvent(

new Event("gold-effect")

);


};





return(


<div className="home-page">



<Header/>




<div className="asset-box">


<div className="asset-item gold-box">

🟡 GOLD

<strong>

{Number(gold || 0).toLocaleString()}

</strong>


</div>




<div className="asset-item diamond-box">


💎 DIAMOND


<strong>

{Number(diamond || 0).toFixed(3)}

</strong>


</div>




<div className="asset-item money-box">


💵 VNĐ


<strong>

{Number(cashValue || 0).toLocaleString()} đ

</strong>


</div>



</div>





<UserAvatar/>






<div className="robot-miner">


🤖


<div>

ROBOT VIP {vip}

</div>


</div>






<button

className="mine-button"

onClick={handleMine}

>


<span>

⛏️

</span>


<br/>


ĐÀO VÀNG



</button>





<MiningEffect/>






<div className="chart-box">


<MarketChart/>


</div>



</div>


)


}
