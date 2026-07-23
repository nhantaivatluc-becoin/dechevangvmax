import "./Ranking.css";


export default function Ranking(){


const pets=

JSON.parse(

localStorage.getItem("pets")

)||[];



const gold=

Number(

localStorage.getItem("gold")

)||0;



const diamond=

Number(

localStorage.getItem("diamond")

)||0;



const petPower=

pets.reduce(

(total,p)=>

total+(p.power||0),

0

);



const players=[


{

name:"Bạn",

level:1,

power:petPower,

gold,

diamond

},


{

name:"Chiến Binh Rồng",

level:50,

power:99999,

gold:500000,

diamond:500

},


{

name:"Thợ Săn Huyền Thoại",

level:35,

power:50000,

gold:200000,

diamond:200

},


{

name:"Kỵ Sĩ Bóng Đêm",

level:20,

power:20000,

gold:50000,

diamond:50

}


];



const rank=[...players].sort(

(a,b)=>

b.power-a.power

);



return(


<div className="ranking-page">


<h1>

🏆 XẾP HẠNG CÁ NHÂN

</h1>



{

rank.map((p,i)=>(



<div

key={i}

className={

"player-card player-"+(i+1)

}

>


<div className="rank">


{

i===0

?

"👑"

:

i===1

?

"🥈"

:

i===2

?

"🥉"

:

"#"+(i+1)

}


</div>



<div>


<h2>

{p.name}

</h2>


<p>

⭐ Level:

{p.level}

</p>


<p>

⚔️ Power:

{p.power}

</p>


<p>

💰 Vàng:

{p.gold}

</p>


<p>

💎 Kim cương:

{p.diamond}

</p>


</div>



</div>


))


}



</div>


)

}
