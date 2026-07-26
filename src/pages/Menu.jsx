import React,{useState} from "react";
import {useNavigate} from "react-router-dom";
import "./Menu.css";


export default function Menu(){

const [open,setOpen]=useState(false);
const navigate=useNavigate();


const items=[

["🏠","Home","/"],
["⛏","Mining","/mining"],
["🌾","Farm","/farm"],
["⚔","Battle","/battle"],
["🎮","Games","/games"],
["🌐","Social Media","/social"],
["💎","SMM Service","/smm"],
["📢","Ads Center","/ads"],
["📈","Stock","/stock"],
["🛒","Shop","/shop"],
["👑","VIP","/vip"],
["💰","Wallet","/wallet"],
["👤","Profile","/profile"]

];


return(

<>

<button
className="menu-icon"
onClick={()=>setOpen(!open)}
>

☰

</button>



<div className={open ? "drawer active":"drawer"}>


<div className="drawer-head">

👑 ĐẾ CHẾ VÀNG VMAX

<span
onClick={()=>setOpen(false)}
>
×
</span>

</div>



{

items.map((x,i)=>(

<div

className="drawer-item"

key={i}

onClick={()=>{

navigate(x[2]);
setOpen(false);

}}

>

<b>
{x[0]}
</b>

<label>
{x[1]}
</label>


</div>

))

}


</div>


</>

)

}
