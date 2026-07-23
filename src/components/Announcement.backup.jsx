import {useEvent} from "../context/EventContext";


export default function Announcement(){


const {

event

}=useEvent();



return(

<div className="announcement">


<div className="announcement-run">


{event}


</div>


</div>

)


}
