import {useEffect,useState} from "react";

import {socket} from "../socket/socket";


export default function OnlinePlayer(){


const [online,setOnline]=useState(0);



useEffect(()=>{


socket.on(

"online_count",

(num)=>{


setOnline(num);


}

);



},[]);



return(

<div>

🌍 Người chơi online:
<b>
{online}
</b>

</div>

)

}
