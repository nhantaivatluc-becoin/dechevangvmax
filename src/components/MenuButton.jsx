import React,{useState} from "react";

import {useNavigate} from "react-router-dom";

import "./MenuButton.css";


export default function MenuButton(){


const [open,setOpen]=useState(false);


const nav=useNavigate();



return(

<>


<button

className="menu-button"

onClick={()=>setOpen(!open)}

>

☰

</button>



{

open &&


<div className="side-menu">


<button onClick={()=>nav("/vip")}>

👑 VIP

</button>


<button onClick={()=>nav("/wallet")}>

💎 Ví

</button>


<button onClick={()=>nav("/ranking")}>

🏆 Xếp hạng

</button>


<button onClick={()=>nav("/giftcode")}>

🎁 Gift Code

</button>


<button onClick={()=>nav("/admin")}>

🔐 Admin

</button>



</div>



}



</>

)

}

