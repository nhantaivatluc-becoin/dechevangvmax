import "./WalletNotice.css";


import {

useEvent

} from "../store/EventStore";



export default function WalletNotice(){



const {

event

}=useEvent();




return(


<div className="wallet-notice">


<div className="wallet-notice-text">


{event}


</div>


</div>


)



}
