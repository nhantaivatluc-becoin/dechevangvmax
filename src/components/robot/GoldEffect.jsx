import React,{useEffect,useState} from "react";

import "./GoldEffect.css";


export default function GoldEffect({active}){


const [items,setItems]=useState([]);



useEffect(()=>{


if(active){


const id=Date.now();



setItems(prev=>[

...prev,

id

]);


setTimeout(()=>{


setItems(prev=>

prev.filter(

item=>item!==id

)

);


},1500);


}



},[active]);






return(

<>


{

items.map(item=>(


<div

className="gold-fly"

key={item}

>

🪙 +10 Gold

</div>


))


}


</>

)



}

