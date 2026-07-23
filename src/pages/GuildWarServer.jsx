import {useState} from "react";
import "./GuildWarServer.css";


export default function GuildWarServer(){


const [server,setServer]=useState(

localStorage.getItem("server")

||"Server 1"

);



const servers=[

"Server 1 - Địa Cầu",

"Server 2 - Hỏa Long",

"Server 3 - Thiên Giới",

"Server 4 - Ma Vực",

"Server 5 - Thần Quốc"

];



function changeServer(s){


setServer(s);


localStorage.setItem(

"server",

s

);


alert(

"🌐 Đã chuyển sang "+s

);


}



return(

<div className="server-page">


<div className="server-box">


<h1>

🌐 LIÊN SERVER

</h1>



<div className="current-server">

Server hiện tại:

<br/>

<b>

{server}

</b>

</div>



{

servers.map((s,i)=>(


<button

key={i}

onClick={()=>changeServer(s)}

>

🌐 {s}

</button>


))


}



</div>


</div>

)

}
