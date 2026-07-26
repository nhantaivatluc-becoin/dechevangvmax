import React,{useEffect,useState} from "react";
import {useNavigate} from "react-router-dom";
import "./HamburgerMenu.css";


export default function HamburgerMenu(){

const [open,setOpen]=useState(false);
const navigate=useNavigate();


useEffect(()=>{

const show=()=>setOpen(true);

window.addEventListener("open-menu",show);

return()=>window.removeEventListener("open-menu",show);

},[]);



const menus=[

["🌍","Đầu tư toàn cầu","/investment"],

["🎮","Trò chơi","/games"],

["📱","SMM Panel","/smm"],

["🐔","Farm & Pet","/farm"],

["🎡","Lucky Wheel","/wheel"],

["🛒","Shop","/shop"],

["💰","Wallet","/wallet"],

["👥","Bạn bè","/friends"],

["🏆","Ranking","/ranking"],

["⚔️","PVP","/pvp"],

["💬","Chat","/chat"],

["🎁","Gift Code","/gift"],

["⚙️","Cài đặt","/settings"]

];


return (

open &&

<div 
className="menu-overlay"
onClick={()=>setOpen(false)}
>

<div 
className="menu-drawer"
onClick={e=>e.stopPropagation()}
>


<div className="menu-header">

<span>☰ MENU</span>

<button onClick={()=>setOpen(false)}>
✕
</button>

</div>


<div className="menu-list">

{

menus.map((m,i)=>(

<div

className="menu-item"

key={i}

onClick={()=>{

navigate(m[2]);

setOpen(false);

}}

>

<span>{m[0]}</span>

{m[1]}

</div>

))

}

</div>


</div>


</div>

)

}
