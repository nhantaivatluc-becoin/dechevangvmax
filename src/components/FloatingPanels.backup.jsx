import "./FloatingPanels.css";

import {
useState
} from "react";


import LaunchNotice from "./LaunchNotice";

import NotificationPopup from "./NotificationPopup";

import AssetBar from "./AssetBar";



export default function FloatingPanels(){


const [mini,setMini]=useState(false);



return(


<div

className={

mini

?

"floating-mini"

:

"floating-panels"

}

>



{

!mini &&

<>


{/* Thanh tài sản realtime */}

<AssetBar />



{/* Che các card cũ bên trái */}

<div className="left-cover-hide"></div>



{/* Thanh chạy chữ */}

<NotificationPopup />



{/* Khung thông báo ra mắt */}

<LaunchNotice />


</>


}





<button


className="pin-button"


onClick={()=>setMini(!mini)}


>


📌


</button>




</div>


)


}
