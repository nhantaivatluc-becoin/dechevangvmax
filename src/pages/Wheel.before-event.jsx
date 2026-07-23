import "./Wheel.css";



import {useState} from "react";

import {useUser} from "../context/UserContext";



export default function Wheel(){


const {

reload

}=useUser();



const prizes=[


{
icon:"🪙",
value:"1000",
name:"GOLD"
},


{
icon:"💎",
value:"0.01",
name:"DIAMOND"
},


{
icon:"🪙",
value:"5000",
name:"GOLD"
},


{
icon:"👑",
value:"VIP",
name:"1 NGÀY"
},


{
icon:"💎",
value:"0.05",
name:"DIAMOND"
},


{
icon:"🪙",
value:"10000",
name:"GOLD"
},


{
icon:"🎁",
value:"0.1",
name:"DIAMOND"
},


{
icon:"🪙",
value:"50000",
name:"GOLD"
}


];



const [rotate,setRotate]=useState(0);

const [spinning,setSpinning]=useState(false);

const [result,setResult]=useState("");





async function spin(){


if(spinning)return;


setSpinning(true);

setResult("");



try{


const res=await fetch(

"http://localhost:3000/api/wheel/spin",

{


method:"POST",


headers:{


"Content-Type":"application/json"


},


body:JSON.stringify({


userId:1


})


}


);



const data=await res.json();



if(!data.success){


alert(data.message);


setSpinning(false);


return;


}




const index=Math.floor(

Math.random()*prizes.length

);



setRotate(

rotate+

3600+

(360-index*45)

);





setTimeout(()=>{


setResult(

"🎉 CHÚC MỪNG: "

+

data.reward

);



reload();



setSpinning(false);



},6000);



}



catch(err){


console.log(err);


alert("Lỗi kết nối");


setSpinning(false);


}



}





return(

<>






<div className="wheel-page">



<div className="notice-top">


🍀 CHÚC BẠN MAY MẮN 🍀


</div>





<div className="wheel-area">



<div className="pointer">

▼

</div>





<div

className="wheel"

style={{

transform:`rotate(${rotate}deg)`

}}

>



<svg

className="wheel-svg"

viewBox="0 0 430 430"

>


{

prizes.map((p,i)=>(


<g

key={i}

transform={

`rotate(${i*45+22.5} 215 215)`

}

>


<text

x="215"

y="80"

textAnchor="middle"

className="wheel-prize-text"

>


<tspan x="215">

{p.icon}

</tspan>



<tspan

x="215"

dy="25"

>

{p.value}

</tspan>



<tspan

x="215"

dy="18"

>

{p.name}

</tspan>



</text>



</g>


))


}


</svg>





<div className="wheel-center">


⭐


</div>



</div>



</div>





<button

onClick={spin}

disabled={spinning}

>


{

spinning

?

"🎡 ĐANG QUAY..."

:

"💎 QUAY NGAY 0.01"

}


</button>





{

result &&

<div className="result">

{result}

</div>


}



</div>



</>


)


}



