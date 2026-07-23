import "./FloatingPanels.css";


import AssetBar from "./AssetBar";

import LaunchNotice from "./LaunchNotice";

import NotificationPopup from "./NotificationPopup";



export default function FloatingPanels(){


return(


<div className="floating-container">


<AssetBar />


<div className="notice-layer">


<LaunchNotice />


<NotificationPopup />


</div>


</div>


)


}
