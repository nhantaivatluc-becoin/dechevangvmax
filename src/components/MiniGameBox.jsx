import {

useEffect,

useState

}

from "react";


import {

spendGold,

addGold,

getWallet

}

from "../utils/currency";


import {

gameSocket,

joinGame,

playGame

}

from "../services/gameSocket";


import "./MiniGameBox.css";





export default function MiniGameBox({

title,

icon,

room,

cost=100,

reward=200

}){


const [msg,setMsg]=useState("");

const [wallet,setWallet]=useState(getWallet());




useEffect(()=>{


joinGame(room);



gameSocket.on(

"game_update",

(data)=>{


if(data.win){


addGold(reward);


setWallet(getWallet());


setMsg(

"🎉 Thắng +"+reward+" Gold"

);


}

else{


setMsg(

"😢 Thua"

);


}


}

);


},[]);





function play(){



if(!spendGold(cost)){


setMsg(

"❌ Không đủ Gold"

);


return;

}



playGame({

room,

win:

Math.random()>0.5

});


setWallet(getWallet());


}




return(

<div className="mini-game-card">


<h2>

{icon} {title}

</h2>



<p>

🪙 Phí:

{cost}

Gold

</p>



<p>

💰 Gold:

{wallet.gold}

</p>



<button

onClick={play}

>

🎮 CHƠI NGAY

</button>



<h3>

{msg}

</h3>


</div>

)


}

