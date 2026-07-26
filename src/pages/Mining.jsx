import React,{useEffect,useState} from "react";
import "./Mining.css";


export default function Mining(){


const [user,setUser]=useState({});


const [auto,setAuto]=useState(false);


const [gold,setGold]=useState(0);



function load(){


let data=

JSON.parse(

localStorage.getItem("user")||"{}"

);



setUser(data);


setGold(

Number(data.gold||0)

);



}





useEffect(()=>{


load();


},[]);








function getPetBonus(){


let bonus=0;


user.pets?.forEach(p=>{


bonus+=Number(p.bonus||0);


});



return bonus;


}









function mine(){



let data=

JSON.parse(

localStorage.getItem("user")||"{}"

);





let petBonus=getPetBonus();





let amount=

1+(petBonus/100);





data.gold=

Number(data.gold||0)+amount;





localStorage.setItem(

"user",

JSON.stringify(data)

);





setGold(data.gold);



window.dispatchEvent(

new Event("financeUpdate")

);


}









useEffect(()=>{



if(!auto)

return;





let timer=setInterval(()=>{


mine();


},10000);





return()=>clearInterval(timer);



},[auto,user]);









function upgrade(){


let data=

JSON.parse(

localStorage.getItem("user")||"{}"

);



let cost=1000;



if(Number(data.gold||0)<cost){


alert("Không đủ GOLD");


return;


}




data.gold-=cost;



data.miningLevel=

Number(data.miningLevel||1)+1;





localStorage.setItem(

"user",

JSON.stringify(data)

);



load();



}









return(



<div className="mining-page">





<h1>

⛏️ ĐÀO VÀNG

</h1>








<div className="gold-box">


🪙 GOLD


<h2>

{gold.toFixed(2)}

</h2>


</div>








<div className="mine-machine">


⛏️

</div>








<p>


🐾 Bonus thú:

<b>

+{getPetBonus()}%

</b>


</p>








<button

className="mine-btn"

onClick={mine}

>

⛏️ ĐÀO VÀNG

</button>







<button

className={

auto?

"auto active":

"auto"

}

onClick={()=>setAuto(!auto)}

>


⚡

{

auto?

"AUTO ON":

"AUTO OFF"

}



</button>








<button

className="upgrade"

onClick={upgrade}

>

⬆️ Nâng cấp máy

<br/>

1000 GOLD

</button>









</div>



)


}
