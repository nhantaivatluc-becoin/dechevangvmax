import React,{useEffect,useState} from "react";
import {io} from "socket.io-client";


const socket=io(
"http://localhost:3000"
);



export default function Invite(){


const [user,setUser]=useState(null);

const [link,setLink]=useState("");

const [history,setHistory]=useState([]);

const [profit,setProfit]=useState(0);





async function load(){


const telegramId=
localStorage.getItem("telegramId");



if(!telegramId){

return;

}





const userRes=
await fetch(

"http://localhost:3000/api/auth/"+telegramId

);



const userData=
await userRes.json();



if(userData.user){

setUser(userData.user);


const linkRes=
await fetch(

"http://localhost:3000/api/invite/"+userData.user.id

);


const linkData=
await linkRes.json();


setLink(
linkData.link
);



}




}





useEffect(()=>{


load();



socket.on(

"announcement",

()=>{


load();


}

);



return()=>{


socket.off(
"announcement"
);


}


},[]);






function copy(){


navigator.clipboard.writeText(link);


alert(
"Đã copy link mời"
);


}






return (

<div

style={{

padding:"15px",

color:"#fff"

}}

>


<h2>

🎁 MỜI BẠN NHẬN THƯỞNG

</h2>



<div

style={{

background:"#222",

padding:"15px",

borderRadius:"10px"

}}

>


<h3>

👥 Người đã mời:

{
user?.invite || 0
}

</h3>



<h3>

💰 Lợi nhuận:

{

(user?.invite ||0)

*

5000

}

Gold

</h3>




</div>




<h3>

🔗 Link mời của bạn

</h3>



<input

value={link}

readOnly

style={{

width:"100%",

padding:"10px"

}}

/>



<button

onClick={copy}

style={{

marginTop:"10px",

padding:"10px",

background:"#ffd700"

}}

>

COPY LINK

</button>






<h3>

📜 Lịch sử mời

</h3>



{

history.length===0 &&

<p>

Chưa có dữ liệu

</p>

}





{

history.map((item)=>(


<div

key={item.id}

style={{

background:"#222",

margin:"8px",

padding:"10px"

}}

>


User:

{item.userId}


<br/>

Thưởng:

{item.reward}

Gold



</div>


))


}




</div>


)


}
