import React,{useEffect,useState} from "react";

import {useParams} from "react-router-dom";


import PlayerAvatar from "../components/PlayerAvatar";


import {

socket,

joinRoom,

sendMessage,

startMatch

}

from "../services/socket";


import {

payGold,

payDiamond,

rewardGold,

getWallet

}

from "../utils/currency";


import "./RoomPlay.css";



export default function RoomPlay(){


const {id}=useParams();



const [players,setPlayers]=useState([

{
name:"Player01",
level:30,
vip:5
},

{
name:"DragonVIP",
level:50,
vip:15
}

]);



const [chat,setChat]=useState("");

const [messages,setMessages]=useState([]);

const [result,setResult]=useState("");

const [wallet,setWallet]=useState(getWallet());





useEffect(()=>{


joinRoom(

id,

{

name:"NGUYEN NGOC ANH",

level:99,

vip:20

}

);





socket.on(

"players",

(data)=>{


setPlayers(data);


}

);





socket.on(

"message",

(data)=>{


setMessages(

old=>[

...old,

data

]

);


}

);





socket.on(

"match_result",

(data)=>{


setResult(data.text);


}

);



},[id]);






function send(){


if(!chat)

return;



sendMessage(

id,

chat,

"NGUYEN NGOC ANH"

);



setChat("");



}





function playGold(){


if(!payGold(100)){


setResult(

"❌ Không đủ Gold"

);


return;

}



startMatch(id);



setWallet(

getWallet()

);


}




function playDiamond(){


if(!payDiamond(5)){


setResult(

"❌ Không đủ Diamond"

);


return;

}



startMatch(id);



}




return(


<div className="room-play">



<h1>

🎮 PHÒNG #{id}

</h1>




<div className="wallet">


💰 Gold:

{wallet.gold}

</div>





<h2>

👥 Người chơi trong phòng

</h2>




<div className="player-list">


{

players.map(

(p,i)=>(

<PlayerAvatar

key={i}

name={p.name}

level={p.level}

vip={p.vip}

/>

)

)


}


</div>






<div className="arena">


✨

<br/>

⚔️ Đấu trường đang chờ

<br/>

✨


</div>






<div className="bet">


<button

onClick={playGold}

>

🪙 Cược 100 Gold

</button>



<button

onClick={playDiamond}

>

💎 Cược 5 Diamond

</button>



</div>






<h2>

{result}

</h2>






<div className="chat">


<h3>

💬 Chat phòng

</h3>



<div className="chat-list">


{

messages.map(

(m,i)=>(

<p key={i}>

{m}

</p>

)

)

}


</div>




<input

value={chat}

onChange={e=>setChat(e.target.value)}

placeholder="Nhập tin nhắn"

/>



<button

onClick={send}

>

Gửi

</button>



</div>




</div>


)

}

