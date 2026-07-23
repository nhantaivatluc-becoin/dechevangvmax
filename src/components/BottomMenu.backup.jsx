import "./BottomMenu.css";

import {
useState
} from "react";


import MenuDrawer from "./MenuDrawer";


export default function BottomMenu(){


const [open,setOpen]=useState(false);



return(


<>


<MenuDrawer

open={open}

close={()=>setOpen(false)}

/>



<div className="bottom-menu">



<button>

🏠

<span>

Home

</span>

</button>




<button>

⛏️

<span>

Đào

</span>

</button>




<button>

🎡

<span>

Wheel

</span>

</button>




<button>

🐾

<span>

Pet

</span>

</button>




<button>

💎

<span>

VIP

</span>

</button>





<button

onClick={()=>setOpen(true)}

className="menu-btn"

>

☰

<span>

Menu

</span>


</button>



</div>



</>


)


}
