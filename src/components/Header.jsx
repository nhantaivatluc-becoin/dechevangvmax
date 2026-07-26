import React,{useState} from "react";

import HamburgerMenu from "./HamburgerMenu";


export default function Header(){


const [open,setOpen]=useState(false);


return(

<>


<header className="header">


<button

className="menu-btn"

onClick={()=>setOpen(true)}

>

☰

</button>



<div className="logo">

🔥 VMAX

</div>




<div className="wallet-mini">

💰 Ví

</div>



</header>




<HamburgerMenu

open={open}

close={()=>setOpen(false)}

/>



</>

)

}
