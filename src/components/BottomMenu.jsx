import React from "react";
import {NavLink} from "react-router-dom";
import "./BottomMenu.css";


export default function BottomMenu(){


const menus=[

{
path:"/",
icon:"🏠",
name:"Home"
},

{
path:"/wheel",
icon:"⛏️",
name:"Mine"
},

{
path:"/farm",
icon:"🐾",
name:"Farm"
},

{
path:"/shop",
icon:"🛒",
name:"Shop"
},

{
path:"/vip",
icon:"👑",
name:"VIP"
}

];


return(

<div className="bottom-menu">


<div className="menu-toggle">

☰

</div>


{

menus.map((m)=>(

<NavLink

key={m.path}

to={m.path}

className={({isActive})=>

isActive
?
"menu-item active"
:
"menu-item"

}

>


<span>

{m.icon}

</span>


<small>

{m.name}

</small>


</NavLink>

))

}



</div>


)

}
