import {useEffect,useState} from "react";
import "./GoldEffect.css";


export default function GoldEffect(){


const [gold,setGold]=useState([]);



useEffect(()=>{


let timer=setInterval(()=>{


let id=Date.now();


setGold(x=>[

...x,

{
id,
x:Math.random()*90
}

]);


},800);



return()=>clearInterval(timer);



},[]);




return(

<div className="gold-effect">


{

gold.map(g=>(


<div

key={g.id}

className="fly-gold"

style={{

left:g.x+"%"

}}

>

💰 +50

</div>


))


}


</div>

)

}
