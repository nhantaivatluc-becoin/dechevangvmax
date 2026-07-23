import {useEffect,useState} from "react";


export default function AutoSystem(){


const [autoMine,setAutoMine]=useState(false);

const [autoPet,setAutoPet]=useState(false);



const [gold,setGold]=useState(0);

const [food,setFood]=useState(100);



useEffect(()=>{


if(!autoMine) return;



const mine=setInterval(()=>{


setGold(g=>g+100);


},60000);



return()=>clearInterval(mine);


},[autoMine]);





useEffect(()=>{


if(!autoPet) return;



const pet=setInterval(()=>{


setFood(f=>{


if(f<=20){

return 100;

}


return f-10;


});


},60000);



return()=>clearInterval(pet);



},[autoPet]);





return(

<div className="auto-box">


<h2>
⚙️ AUTO HỆ THỐNG
</h2>



<p>

⛏ Auto đào:
<b>

{gold}

</b>
Gold

</p>



<button

onClick={()=>setAutoMine(!autoMine)}

>

{autoMine?"🟢 Đang đào":"⚪ Bật đào"}

</button>




<p>

🐉 Thức ăn động vật:

{food}%

</p>



<button

onClick={()=>setAutoPet(!autoPet)}

>

{autoPet?"🟢 Auto chăm sóc":"⚪ Bật chăm sóc"}

</button>



</div>

)

}

