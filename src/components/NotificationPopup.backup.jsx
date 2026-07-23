import "./NotificationPopup.css";


import {
useEffect,
useState
} from "react";



export default function NotificationPopup(){



const [notice,setNotice]=useState(null);





useEffect(()=>{



const events=[


"👑 Người chơi Kien đã nâng cấp VIP 5",

"💎 Người chơi ABC rút 250đ thành công",

"🎁 Người chơi nhận quà đăng nhập",

"🔥 Kien đang đứng TOP đào vàng",

"⛏️ Robot đào vàng hoạt động ổn định"


];





const timer=setInterval(()=>{



const text=

events[

Math.floor(

Math.random()*events.length

)

];



setNotice(text);




setTimeout(()=>{


setNotice(null);


},5000);





},20000);





return()=>clearInterval(timer);



},[]);






if(!notice){


return null;


}





return(


<div className="notification-popup">


{notice}


</div>


)



}
