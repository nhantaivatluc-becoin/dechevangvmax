import "./NotificationPopup.css";

import {
useEffect,
useState
} from "react";



export default function NotificationPopup(){


const notices=[

"👑 Người chơi Kien vừa nâng cấp VIP",

"💎 Diamond giao dịch thành công",

"⛏️ Robot đào vàng đang chạy",

"🏆 BXH đang cập nhật",

"🎁 Event hằng ngày mở cửa"

];


const [text,setText]=useState("");



useEffect(()=>{


const timer=setInterval(()=>{


const i=Math.floor(

Math.random()*notices.length

);



setText(notices[i]);



setTimeout(()=>{

setText("");

},5000);



},20000);



return()=>clearInterval(timer);



},[]);



if(!text)

return null;



return(


<div className="notification-popup">


{text}


</div>


)


}
