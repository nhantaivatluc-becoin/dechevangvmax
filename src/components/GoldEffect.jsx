import React,{useEffect,useState} from "react";
import "./GoldEffect.css";


export default function GoldEffect(){


const [coins,setCoins]=useState([]);


useEffect(()=>{


const timer=setInterval(()=>{


const id=Date.now();


setCoins(c=>[

...c,

{
id,
left:Math.random()*90
}

]);



setTimeout(()=>{


setCoins(c=>

c.filter(x=>x.id!==id)

);


},3000);



},800);



return()=>clearInterval(timer);



},[]);



return(

<>


{

coins.map(c=>(


<div

key={c.id}

className="gold-fall"

style={{
left:c.left+"%"
}}

>

🪙

</div>


))

}


</>

)


}
