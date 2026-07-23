import "./PlayerRanking.css";


export default function PlayerRanking(){


const user=

JSON.parse(

localStorage.getItem("user")

)||{

name:"Player",

vip:0,

level:1

};



const pets=

JSON.parse(

localStorage.getItem("pets")

)||[];



const gold=

Number(localStorage.getItem("gold"))||0;



let power=pets.reduce(

(a,p)=>

a+(p.power||0)

,0);



const players=[


{

name:user.name||"Player",

vip:user.vip||0,

level:user.level||1,

pets:pets.length,

power:power,

gold:gold

},


{

name:"🐲 DragonKing",

vip:15,

level:100,

pets:50,

power:999999,

gold:99999999

},


{

name:"⚡ GoldMaster",

vip:10,

level:80,

pets:35,

power:500000,

gold:50000000

}


].sort(

(a,b)=>

b.power-a.power

);



return(

<div className="player-rank">


<h1>

👤 XẾP HẠNG CÁ NHÂN

</h1>



{

players.map((p,i)=>(


<div

className={

"player-card rank-"+(i+1)

}

key={i}

>


<h2>

{

i===0?"🥇":

i===1?"🥈":

i===2?"🥉":

"🏅"

}

{p.name}

</h2>



<p>

👑 VIP:

{p.vip}

</p>



<p>

⭐ Level:

{p.level}

</p>



<p>

🐾 Số Pet:

{p.pets}

</p>



<p>

⚔️ Tổng lực chiến:

{p.power}

</p>



<p>

💰 Vàng:

{p.gold}

</p>



</div>


))


}



</div>

)

}
