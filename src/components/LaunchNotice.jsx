import "./LaunchNotice.css";

import {useEffect,useState} from "react";


export default function LaunchNotice(){


const list=[

"🚀 DECHEVANGVMAX MỞ CỬA CHÍNH THỨC",

"⛏️ Đào vàng realtime +0.50 GOLD/phút",

"💎 Diamond đồng bộ thời gian thật",

"👑 VIP tăng tốc độ đào vàng",

"📈 Chứng khoán DECHEVANG đã mở"

];


const [index,setIndex]=useState(0);



useEffect(()=>{


const t=setInterval(()=>{


setIndex(i=>(i+1)%list.length);


},5000);



return()=>clearInterval(t);


},[]);



return(

<div className="launch-notice">

📌

<span>

{list[index]}

</span>


</div>

)


}
