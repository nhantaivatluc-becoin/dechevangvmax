import "./LaunchNotice.css";

import {useState,useEffect} from "react";

import {useUser} from "../context/UserContext";



export default function LaunchNotice(){


const {user}=useUser();


const [show,setShow]=useState(true);

const [time,setTime]=useState(3600);



useEffect(()=>{


const timer=setInterval(()=>{


setTime(t=>{


if(t<=0){

return 3600;

}


return t-1;


});


},1000);



return()=>clearInterval(timer);


},[]);




function clock(){


const h=Math.floor(time/3600);

const m=Math.floor(

(time%3600)/60

);

const s=time%60;



return (

String(h).padStart(2,"0")

+

":"

+

String(m).padStart(2,"0")

+

":"

+

String(s).padStart(2,"0")

);


}




if(!show){

return(

<button

className="pin-btn-open"

onClick={()=>setShow(true)}

>

📌

</button>

)

}




return(


<div className="launch-notice">



<button

className="pin-btn"

onClick={()=>setShow(false)}

>

📌

</button>



<h2>

🚀 DECHEVANGVMAX

</h2>



<p>

MẶT CHÍNH THỨC RA MẮT

</p>



<hr/>




<div className="notice-item">

⛏ Đào vàng mỗi ngày

<br/>

<span>

🪙 {user?.gold || 0} GOLD

</span>

<br/>

<small>

+0.50 GOLD / phút

</small>

</div>





<div className="notice-item">

💎 Diamond theo thời gian thật

<br/>

<span>

💎 {user?.diamond || 0} DIAMOND

</span>

</div>





<div className="notice-item">

👑 VIP tăng tốc độ đào

<br/>

<span>

VIP {user?.vip || 0}

</span>

</div>





<div className="notice-item">

🏆 Đua TOP nhận thưởng

<br/>

<span>

TOP #{user?.rank || "--"}

</span>

</div>





<div className="notice-item">

🎁 Event hàng ngày

<br/>

<span>

⏱ {clock()}

</span>

</div>




</div>


)


}
