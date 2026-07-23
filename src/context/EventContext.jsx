import {createContext,useContext,useState} from "react";


const EventContext=createContext();


export function EventProvider({children}){


const [event,setEvent]=useState(
"🍀 Chúc bạn may mắn"
);



function pushEvent(message){

setEvent(message);

}



return(

<EventContext.Provider

value={{

event,

pushEvent

}}

>

{children}

</EventContext.Provider>


)

}



export function useEvent(){

return useContext(EventContext);

}
