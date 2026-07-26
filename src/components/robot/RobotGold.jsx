import React,{useEffect,useState} from "react";

import GoldEffect from "./GoldEffect";
import RobotUpgrade from "./RobotUpgrade";

import "./RobotGold.css";


export default function RobotGold(){


const userId=1;


const API="http://localhost:3000/api/mining";



const [gold,setGold]=useState(0);

const [diamond,setDiamond]=useState(0);

const [vnd,setVnd]=useState(0);



const [auto,setAuto]=useState(false);

const [loading,setLoading]=useState(false);


const [goldEffect,setGoldEffect]=useState(false);



const [robotLevel,setRobotLevel]=useState(1);






async function loadMining(){


try{


const res=await fetch(

`${API}/${userId}`

);



const data=await res.json();



if(data.success){


setGold(data.gold);

setDiamond(data.diamond);

setVnd(data.vnd);


}



}catch(error){

console.log(error);

}



}







async function mine(){



if(loading)return;


setLoading(true);



try{


const reward=

10 * robotLevel;





const res=await fetch(

`${API}/mine`

,{

method:"POST",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({

userId,

reward

})


}

);





const data=await res.json();



if(data.success){


setGold(data.gold);

setDiamond(data.diamond);

setVnd(data.vnd);



setGoldEffect(true);



setTimeout(()=>{


setGoldEffect(false);


},200);


}



}catch(error){


console.log(error);


}



setLoading(false);


}







useEffect(()=>{


loadMining();


},[]);







useEffect(()=>{


if(!auto)return;



const timer=setInterval(()=>{


mine();


},3000);



return()=>clearInterval(timer);


},[auto,robotLevel]);









const progress=

Math.min(

(Number(gold)/5000000)*100,

100

);








return(


<div className="robot-box">


<GoldEffect

active={goldEffect}

/>





<h1>

🤖 Robot Đào Vàng

</h1>






<div className="robot">


🤖

</div>







<div className="robot-info">


<p>
🤖 Cấp Robot
</p>


<div className="robot-number">

Level {robotLevel}/15

</div>





<p>
🪙 Gold
</p>


<div className="robot-number">

{Number(gold).toLocaleString()}

</div>





<p>
💎 Diamond
</p>


<div className="robot-number">

{Number(diamond).toLocaleString()}

</div>





<p>
💵 VNĐ
</p>


<div className="robot-number">

{Number(vnd).toLocaleString()} đ

</div>




</div>









<div className="progress-box">


<p>

Tiến độ nhận 0.1 Diamond

</p>


<div className="progress">


<div

className="progress-fill"

style={{

width:`${progress}%`

}}

/>


</div>


<p>

{progress.toFixed(2)}%

</p>



</div>







<button onClick={mine}>


⛏

{

loading

?

"Đang đào..."

:

"Đào thủ công"

}


</button>






<button

onClick={()=>setAuto(!auto)}

>


{

auto

?

"🛑 Tắt Robot"

:

"⚡ Bật Robot tự đào"

}



</button>








<RobotUpgrade

level={robotLevel}

setLevel={setRobotLevel}

gold={gold}

setGold={setGold}

/>





</div>


)


}

