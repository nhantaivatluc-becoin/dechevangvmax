import "./FloatingPanels.css";

import {
useState
} from "react";


import LaunchNotice from "./LaunchNotice";

import NotificationPopup from "./NotificationPopup";



export default function FloatingPanels(){


const [mini,setMini]=useState(false);



return(


<div className={mini ? "floating-mini" : "floating-panels"}>



<button

className="pin-button"

onClick={()=>setMini(!mini)}

>

📌

</button>




{

!mini &&

<>



<div className="left-cover-hide">


</div>



<NotificationPopup/>


<LaunchNotice/>



</>


}



</div>


)


}
