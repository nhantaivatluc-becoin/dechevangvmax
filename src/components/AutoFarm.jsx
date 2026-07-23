import {useEffect,useState} from "react";


const petsDefault=[


{
id:1,
name:"🐮 Bò Vàng",
food:100,
level:1,
gold:50
},


{
id:2,
name:"🐔 Gà Vàng",
food:100,
level:1,
gold:20
},


{
id:3,
name:"🐉 Rồng Vàng",
food:100,
level:1,
gold:200
}


];



export default function AutoFarm(){


const [pets,setPets]=useState(petsDefault);


const [gold,setGold]=useState(0);


const [auto,setAuto]=useState(true);



useEffect(()=>{


if(!auto)return;



const timer=setInterval(()=>{



setGold(g=>g+

pets.reduce(

(total,p)=>total+p.gold,

0

)

);



setPets(old=>

old.map(p=>(

{

...p,

food:p.food<=10?100:p.food-5,

level:p.food<=10?p.level+1:p.level


}

))

);



},60000);



return()=>clearInterval(timer);



},[auto,pets]);




return(


<div className="farm-auto">


<h2>
🌱 AUTO FARM
</h2>


<h3>
💰 +{gold} Gold
</h3>



<button

onClick={()=>setAuto(!auto)}

>

{

auto?

"🟢 Đang tự động":

"⚪ Đã tắt"

}


</button>



{

pets.map(p=>(


<div className="pet-item">


<h3>
{p.name}
</h3>


<p>
⭐ Level {p.level}
</p>


<p>
🍖 Thức ăn {p.food}%
</p>


<p>
💰 Sinh {p.gold} Gold/phút
</p>


</div>


))


}



</div>


)

}

