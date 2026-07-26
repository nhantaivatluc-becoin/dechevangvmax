import React from "react";

import {useNavigate} from "react-router-dom";


const menus=[


["🏠","Home","/"],


["🎮","Game Center","/game"],


["🐾","Pet Center","/pet"],


["🛒","Pet Shop","/pet-shop"],


["🔥","Ghép Thú","/fusion"],


["💰","Wallet","/wallet"],


["👑","VIP","/vip"],


["📈","Investment","/investment"],


["🚀","SMM Panel","/smm"],



["🎁","Event","/event"],


["🎟️","Gift Code","/giftcode"],


["🔔","Thông Báo","/notification"],


["📩","Hộp Thư","/mail"],


["🏆","Ranking","/ranking"],


["🥇","Leaderboard","/leaderboard"],


["🎯","Mission","/mission"],


["💬","World Chat","/chat"],


["🏰","Guild Bang Hội","/guild"],


["👥","Invite Friends","/invite"],


["📜","Lịch Sử Giao Dịch","/history"],


["🔐","Bảo Mật","/security"],


["⚙️","Setting","/setting"],


["👑","Admin Panel","/admin"]


];



export default function HamburgerMenu({

open,

close

}){


const navigate=useNavigate();



if(!open)

return null;



return(

<div className="drawer">


<div className="drawer-title">


🔥 DECHEVANG VMAX



<button

onClick={close}

>

✕


</button>


</div>




<div className="drawer-list">


{

menus.map((item,index)=>(


<button

key={index}

className="drawer-item"


onClick={()=>{


navigate(item[2]);


close();


}}


>


<span>

{item[0]}

</span>


<span>

{item[1]}

</span>


</button>


))


}


</div>



</div>

)

}
