import {

createContext,

useContext,

useEffect,

useState

} from "react";



const EventContext=createContext();



export function EventProvider({children}){



const events=[


"👑 Chào mừng Vương Giả mới gia nhập DECHEVANGVMAX",


"⛏️ Người chơi ANH BIN vừa đào được 12.500 Gold",


"⭐ Người chơi KIEN vừa nâng cấp VIP 10 thành công",


"💎 Người chơi MAX vừa rút thành công 50.000 VNĐ",


"🏆 Top 1 hôm nay nhận thưởng Diamond",


"🔥 Hệ thống đào vàng realtime đang hoạt động",


"🎉 Sự kiện ra mắt chính thức đang diễn ra"


];




const [event,setEvent]=useState(events[0]);





useEffect(()=>{


const timer=setInterval(()=>{


const random=

events[

Math.floor(

Math.random()*events.length

)

];



setEvent(random);



},7000);




return()=>clearInterval(timer);



},[]);






return(


<EventContext.Provider


value={{event}}


>


{children}


</EventContext.Provider>



)



}







export function useEvent(){


return useContext(EventContext);


}
