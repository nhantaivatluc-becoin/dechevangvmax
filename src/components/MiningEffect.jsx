import "./MiningEffect.css";


import {

useEffect,

useState

} from "react";



export default function MiningEffect(){


const [effects,setEffects]=useState([]);





useEffect(()=>{


const handler=()=>{


const id=Date.now();



setEffects(prev=>[

...prev,

{

id,

animal:

Math.random()>0.5

?"🐰"

:"🐲",

gold:

Math.floor(Math.random()*50)+10

}

]);





setTimeout(()=>{


setEffects(prev=>

prev.filter(

item=>item.id!==id

)

);


},2000);



};




window.addEventListener(

"gold-effect",

handler

);




return()=>{


window.removeEventListener(

"gold-effect",

handler

);


};



},[]);






return(



<div className="mine-effects">


{

effects.map(e=>(


<div

key={e.id}

className="gold-fly"

>


<span>

{e.animal}

</span>


<br/>


🪙 +{e.gold}



</div>



))


}



</div>



)


}
