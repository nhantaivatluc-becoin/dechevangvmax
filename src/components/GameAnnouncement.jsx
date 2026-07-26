import React,{useEffect,useState} from "react";
import {io} from "socket.io-client";


const socket=io(
"http://localhost:3000"
);



export default function GameAnnouncement(){


const [text,setText]=useState("");



useEffect(()=>{


fetch(

"http://localhost:3000/api/announcement"

)

.then(r=>r.json())

.then(data=>{


if(

data.data && data.data.length

){

setText(

data.data[0].content

);

}


});





socket.on(

"announcement",

(data)=>{


setText(

data.content

);


});




return ()=>{

socket.off(
"announcement"
);

};


},[]);





if(!text){

return null;

}




return (

<div

style={{

overflow:"hidden",

whiteSpace:"nowrap",

background:"#111",

color:"#ffd700",

padding:"8px",

fontWeight:"bold"

}}

>


<div

style={{

display:"inline-block",

animation:"scroll 15s linear infinite"

}}

>


🔥 {text}


</div>



<style>


{`

@keyframes scroll{

0%{

transform:translateX(100%);

}

100%{

transform:translateX(-100%);

}

}

`}


</style>



</div>


)


}
