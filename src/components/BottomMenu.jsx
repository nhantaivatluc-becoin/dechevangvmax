import React,{useEffect,useState} from "react";
import {Link} from "react-router-dom";
import {isAdmin} from "../config/admin";
import "./BottomMenu.css";


export default function BottomMenu(){


const [admin,setAdmin]=useState(false);



useEffect(()=>{


let user=

JSON.parse(

localStorage.getItem("user")||"{}"

);



setAdmin(

isAdmin(user.telegramId)

);



},[]);






function openMenu(){


if(window.openGameMenu){


window.openGameMenu();


}


}






return(



<div className="bottom-menu">





<Link to="/">

<span className="icon">

🏠

</span>

<span>

Home

</span>

</Link>







<Link to="/mining">

<span className="icon">

⛏️

</span>

<span>

Đào

</span>

</Link>







<Link to="/vip">

<span className="icon">

👑

</span>

<span>

VIP

</span>

</Link>







<Link to="/investment">

<span className="icon">

🌍

</span>

<span>

Đầu tư

</span>

</Link>








{

admin &&


<Link

className="admin-btn"

to="/admin-deposit"

>

<span className="icon">

🛡️

</span>


<span>

Admin

</span>


</Link>


}







<button

className="menu-bottom-btn"

onClick={openMenu}

>


<span className="icon">

☰

</span>


<span>

Menu

</span>


</button>







</div>



)


}
