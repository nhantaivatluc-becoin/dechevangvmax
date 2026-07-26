import React,{useEffect,useRef} from "react";


export default function MusicManager(){


const audio=useRef(null);



useEffect(()=>{


let enabled=

localStorage.getItem("music")!=="off";



if(!enabled)
return;



audio.current=new Audio(
"/music/bgm-home.mp3"
);



audio.current.loop=true;


audio.current.volume=0.25;



let play=()=>{

audio.current.play()
.catch(()=>{});

};



document.addEventListener(
"click",
play,
{once:true}
);



return()=>{

if(audio.current){

audio.current.pause();

}

};


},[]);






return null;


}
