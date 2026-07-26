import React,{useState} from "react";
import "./Friend.css";


export default function Friend(){



const [invite,setInvite]=useState(5);



const link=

"https://t.me/DECHEVANGMAX_BOT?start=8454844333";




function copy(){


navigator.clipboard.writeText(link);


alert(

"Đã copy link mời"

);


}





return(


<div className="friend-page">





<h1>

👥 MỜI BẠN BÈ

</h1>





<div className="invite-box">


🎁 Link giới thiệu



<p>

{link}

</p>




<button

onClick={copy}

>

📋 COPY LINK

</button>



</div>








<div className="friend-stat">


👥 Đã mời:


<h2>

{invite}

</h2>



</div>








<div className="reward">


🎁 Phần thưởng



<p>

Mỗi bạn tham gia:

</p>



<h2>

+1000 🪙 GOLD

</h2>


</div>






</div>



)


}
