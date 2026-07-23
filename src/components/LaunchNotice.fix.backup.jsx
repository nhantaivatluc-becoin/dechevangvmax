import "./LaunchNotice.css";

import {
useEffect,
useState
} from "react";



export default function LaunchNotice(){


const [show,setShow]=useState(true);


const messages=[

"🚀 DECHEVANGVMAX MỞ CỬA CHÍNH THỨC",

"💎 Diamond đồng bộ thời gian thật",

"⛏️ Robot đào vàng đang hoạt động",

"👑 VIP tăng tốc độ khai thác",

"📈 Thị trường chứng khoán đã mở"

];



const [msg,setMsg]=useState(messages[0]);



useEffect(()=>{


let i=0;


const timer=setInterval(()=>{


i++;


if(i>=messages.length)

i=0;



setMsg(messages[i]);



},5000);



return()=>clearInterval(timer);



},[]);





if(!show)

return null;




return(


<div className="launch-notice">


<button

className="notice-pin"

onClick={()=>setShow(false)}

>

📌

</button>


<div>


{msg}


</div>


</div>


)


}
