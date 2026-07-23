import {useEffect,useState} from "react";


export default function GoldParticles(){


const [items,setItems]=useState([]);



useEffect(()=>{


const timer=setInterval(()=>{


setItems(v=>[

...v,

{

id:Date.now(),

left:Math.random()*100

}

]);


},800);



return()=>clearInterval(timer);


},[]);



return (

<div className="gold-particles">


{

items.map(i=>(

<span

key={i.id}

style={{

left:i.left+"%"

}}

>

🪙

</span>

))

}


</div>

)


}

