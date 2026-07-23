import {useState,useEffect} from "react";
import "./GuildMine.css";


export default function GuildMine(){


const [mine,setMine]=useState(

JSON.parse(

localStorage.getItem("guildMine")

)

||

{

diamondLevel:1,

goldLevel:1,

diamond:0,

gold:0,

lastTime:Date.now()

}

);



const [diamond,setDiamond]=useState(

Number(localStorage.getItem("diamond"))

||5000

);



const [gold,setGold]=useState(

Number(localStorage.getItem("guildGold"))

||5000

);





useEffect(()=>{


const timer=setInterval(()=>{


const now=Date.now();


const seconds=Math.floor(

(now-mine.lastTime)/1000

);



if(seconds>=10){


const data={

...mine,

diamond:

mine.diamond+

(seconds*mine.diamondLevel),


gold:

mine.gold+

(seconds*100*mine.goldLevel),


lastTime:now

};



setMine(data);



localStorage.setItem(

"guildMine",

JSON.stringify(data)

);



}



},5000);



return()=>clearInterval(timer);


},[mine]);





function collect(){



const d=diamond+mine.diamond;

const g=gold+mine.gold;



setDiamond(d);

setGold(g);



localStorage.setItem(

"diamond",

d

);



localStorage.setItem(

"guildGold",

g

);



const data={

...mine,

diamond:0,

gold:0

};



setMine(data);


localStorage.setItem(

"guildMine",

JSON.stringify(data)

);


}




function upgradeDiamond(){


const data={

...mine,

diamondLevel:mine.diamondLevel+1

};


setMine(data);


localStorage.setItem(

"guildMine",

JSON.stringify(data)

);


}



function upgradeGold(){


const data={

...mine,

goldLevel:mine.goldLevel+1

};


setMine(data);


localStorage.setItem(

"guildMine",

JSON.stringify(data)

);


}





return(


<div className="mine-page">


<div className="mine-glass">



<h1>

⛏️ KHU KHAI THÁC BANG

</h1>




<p>

💎 Diamond:

{diamond}

</p>



<p>

💰 Gold:

{gold}

</p>






<div className="mine-card">


<h2>

💎 Mỏ Kim Cương

</h2>


<p>

⭐ Cấp:

{mine.diamondLevel}

</p>


<p>

💎 Đang khai thác:

{mine.diamond}

</p>



<button

onClick={upgradeDiamond}

>

⬆️ Nâng cấp mỏ

</button>


</div>






<div className="mine-card">


<h2>

⛏️ Mỏ Vàng

</h2>


<p>

⭐ Cấp:

{mine.goldLevel}

</p>


<p>

💰 Đang khai thác:

{mine.gold}

</p>



<button

onClick={upgradeGold}

>

⬆️ Nâng cấp mỏ

</button>


</div>






<button

className="collect"

onClick={collect}

>

📦 THU HOẠCH TÀI NGUYÊN

</button>




</div>


</div>


)

}
