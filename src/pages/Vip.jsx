import "./Vip.css";


import Header from "../components/Header";

import BottomMenu from "../components/BottomMenu";

import SideMenu from "../components/SideMenu";

import AssetHUD from "../components/AssetHUD";


import {

useGame

} from "../store/GameStore";


import {

useNotification

} from "../store/NotificationStore";



export default function Vip(){



const {

gold,

vip,

setVip

}=useGame();





const {

notify

}=useNotification();






const vipList=[


{
level:1,
cost:10000,
bonus:5
},


{
level:2,
cost:50000,
bonus:10
},


{
level:3,
cost:100000,
bonus:15
},


{
level:5,
cost:500000,
bonus:25
},


{
level:10,
cost:2000000,
bonus:50
},


{
level:15,
cost:10000000,
bonus:100
}


];






function buyVip(level,cost){



if(gold < cost){


notify(

"❌ Không đủ Gold để nâng cấp VIP"

);


return;


}




setVip(level);



notify(

"⭐ Chúc mừng Vương Giả đã nâng cấp thành công VIP "

+

level

+

" 🚀"

);



}





return(


<div className="vip-page">


<SideMenu/>

<Header/>

<AssetHUD/>





<h1>

⭐ VIP SYSTEM

</h1>





<div className="vip-current">


<h2>

VIP hiện tại: {vip}

</h2>


</div>







{

vipList.map((item,index)=>(


<div

className="vip-card"

key={index}

>


<h2>

⭐ VIP {item.level}

</h2>


<p>

⚡ Bonus +{item.bonus}%

</p>


<p>

🟡 {item.cost.toLocaleString()} Gold

</p>



<button

onClick={()=>buyVip(

item.level,

item.cost

)}

>

NÂNG CẤP

</button>



</div>



))


}





<BottomMenu/>





</div>


)



}
