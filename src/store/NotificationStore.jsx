import {
createContext,
useContext,
useState
} from "react";


const NotificationContext=createContext();



export function NotificationProvider({children}){


const [message,setMessage]=useState(

"👑 Chào mừng đến với DECHEVANGVMAX"

);



function notify(text){

setMessage(text);

}




return(

<NotificationContext.Provider

value={{

message,

notify

}}

>

{children}

</NotificationContext.Provider>


)


}



export function useNotification(){

return useContext(NotificationContext);

}
