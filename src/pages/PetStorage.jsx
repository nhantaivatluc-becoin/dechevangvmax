import {useState} from "react";
import "./PetStorage.css";


export default function PetStorage(){


const [pets,setPets]=useState(

JSON.parse(

localStorage.getItem("pets")

)||[]

);



function setBattle(id){


const list=pets.map(p=>({

...p,

active:p.id===id

}));


setPets(list);


localStorage.setItem(

"pets",

JSON.stringify(list)

);


}



function setFarm(id){


const list=pets.map(p=>({

...p,

farm:p.id===id

}));


setPets(list);


localStorage.setItem(

"pets",

JSON.stringify(list)

);


}



return(


<div className="storage-page">


<h1>

🐾 KHO PET

</h1>



{

pets.length===0


?


<h2>

❌ Chưa có Pet

</h2>


:


pets.map((pet,index)=>(



<div

key={index}

className={

"pet-card "

+

(

pet.active

?

"battle-active "

:

""

)

+

(

pet.evolution

?

"evolved "

:

""

)

}


>


<h1>

{pet.name}

</h1>



<p>

⭐ Level:

{pet.level||1}

</p>



<p>

⚔️ Power:

{pet.power||0}

</p>



<p>

✨ EXP:

{pet.exp||0}/100

</p>



<p>

{

pet.skill2

?

"🔥 Skill 2"

:

"🔒 Skill 2"

}

</p>



<p>

{

pet.evolution

?

"🧬 Đã tiến hóa"

:

"🥚 Chưa tiến hóa"

}

</p>



<p>

{

pet.ultimate

?

"👑 Ultimate"

:

""

}

</p>



<button

onClick={()=>setBattle(pet.id)}

>

⚔️ DÙNG CHIẾN ĐẤU

</button>



<button

onClick={()=>setFarm(pet.id)}

>

⛏️ DÙNG FARM

</button>



{

pet.active &&

<h3>

🔥 Pet đang chiến đấu

</h3>

}



{

pet.farm &&

<h3>

💰 Pet đang đào vàng

</h3>

}



</div>


))


}



</div>


)

}
