import "./NotificationPopup.css";

import {
useEffect,
useState
} from "react";

import {
useEvent
} from "../context/EventContext";



export default function NotificationPopup(){


const {

event

}=useEvent();



const [show,setShow]=useState("");



useEffect(()=>{


if(event){

setShow(event);

}



},[event]);




if(!show){

return null;

}



return(

<div className="notification-bar">


<div className="notification-run">


{show}


</div>


</div>

)


}
