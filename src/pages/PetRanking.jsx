import "./PetRanking.css";


export default function PetRanking(){


const pets=

JSON.parse(

localStorage.getItem("pets")

)||[];



const ranking=[...pets].sort(

(a,b)=>

(b.power||0)-(a.power||0)

);



return(

<div className="pet-ranking-page">


<h1>

🏆 BXH PET

</h1>



{

ranking.length===0

?


<h2>

❌ Chưa có dữ liệu

</h2>


:


ranking.map((pet,index)=>(



<div

key={pet.id||index}

className={

"rank-card rank-"+(index+1)

}

>



<div className="rank-number">


{

index===0

?

"👑"

:

index===1

?

"🥈"

:

index===2

?

"🥉"

:

"#"+(index+1)

}


</div>



<div>


<h2>

{pet.name}

</h2>


<p>

⭐ Level:

{pet.level||1}

</p>


<p>

⚔️ Power:

{pet.power||0}

</p>


<p>

🧬

{

pet.evolution

?

"Đã tiến hóa"

:

"Chưa tiến hóa"

}

</p>



<p>

👑

{

pet.ultimate

?

"Ultimate"

:

""

}

</p>


</div>



</div>


))


}



</div>

)

}
