import {useState} from "react";


export default function Chat(){


const [msg,setMsg]=useState("");

const [chat,setChat]=useState([
"👑 Admin: Chào mừng Đế Chế Vàng"
]);


function send(){

if(msg){

setChat([
...chat,
"🙂 Bạn: "+msg
]);

setMsg("");

}

}



return(

<div className="card">


<h1>
🌎 Chat Thế Giới
</h1>


{

chat.map((c,i)=>(

<p key={i}>
{c}
</p>

))

}



<input

value={msg}

onChange={
e=>setMsg(e.target.value)
}

placeholder="Nhập tin nhắn"

/>


<button onClick={send}>

Gửi

</button>


</div>

)

}
