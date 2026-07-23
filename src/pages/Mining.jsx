import "./Mining.css";


import Header from "../components/Header";

import BottomMenu from "../components/BottomMenu";

import SideMenu from "../components/SideMenu";

import AssetHUD from "../components/AssetHUD";


import {
useGame
} from "../store/GameStore";



export default function Mining(){



const {


mine,

goldPrice,

gold


}=useGame();






return(


<div className="mining-page">



<SideMenu/>


<Header/>


<AssetHUD/>





<h1>

⛏️ KHU ĐÀO VÀNG

</h1>






<div className="mine-card">



<div className="mine-animation">

⛰️💰

</div>





<h2>

MỎ VÀNG REALTIME

</h2>



<p>

Giá vàng:

🟡 {goldPrice.toFixed(2)}

</p>




<p>

Tài sản:

{Math.floor(gold).toLocaleString()}

Gold

</p>






<button

onClick={mine}

>

⛏️ ĐÀO NGAY

</button>




</div>







<BottomMenu/>





</div>


)



}
