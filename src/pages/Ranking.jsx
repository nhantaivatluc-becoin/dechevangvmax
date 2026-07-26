import React,{useEffect,useState} from "react";
import "./Ranking.css";


export default function Ranking(){


const [players,setPlayers]=useState([]);



useEffect(()=>{


let data=[

{
rank:1,
name:"WhaleKing",
vip:15,
gold:9999999,
power:5000
},

{
rank:2,
name:"DragonLord",
vip:12,
gold:5000000,
power:3500
},

{
rank:3,
name:"GoldMaster",
vip:10,
gold:3000000,
power:2800
},

{
rank:4,
name:"MinerPro",
vip:8,
gold:1500000,
power:2000
},

{
rank:5,
name:"Kiên",
vip:5,
gold:1000000,
power:1500
}

];


setPlayers(data);



},[]);






return(


<div className="ranking-page">



<h1>

🏆 BẢNG XẾP HẠNG

</h1>




<div className="top-player">


🥇

TOP SERVER


</div>





{

players.map((p,i)=>(


<div

className={

i<3?

"rank-card top":

"rank-card"

}

key={i}

>



<div className="rank">

#{p.rank}

</div>



<div className="avatar">

👤

</div>



<div className="info">


<h3>

{p.name}

</h3>



<p>

👑 VIP {p.vip}

</p>


<p>

🪙 {p.gold.toLocaleString()}

</p>



</div>






<div className="power">

⚔️

{p.power}

</div>




</div>



))


}



</div>



)



}
