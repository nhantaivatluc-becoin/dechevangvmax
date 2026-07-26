import React from "react";

import {useNavigate} from "react-router-dom";


const menu=[


["🏠","Home","/"],

["🎮","Game","/game"],

["🐾","Pet","/pet"],

["💰","Wallet","/wallet"],

["☰","Menu","/setting"]


];



export default function BottomMenu(){


const navigate=useNavigate();



return(

<nav className="bottom-menu">


{

menu.map((item,index)=>(


<button

key={index}

onClick={()=>navigate(item[2])}

>


<strong>

{item[0]}

</strong>


<small>

{item[1]}

</small>


</button>


))


}


</nav>

)

}
