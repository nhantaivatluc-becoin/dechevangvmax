import {useEffect,useRef,useState} from "react";


const musics={

"/":"home.mp3",

"/farm":"farm.mp3",

"/shop":"shop.mp3",

"/vip":"vip.mp3",

"/pvp":"pvp.mp3",

"/wheel":"wheel.mp3"

};



export default function MusicManager({page="/"} ){


const audio=useRef(null);


const [enabled,setEnabled]=useState(

localStorage.getItem("music")!=="off"

);



useEffect(()=>{


if(!audio.current)return;


audio.current.src=

"/music/"+(musics[page]||"home.mp3");



if(enabled){

audio.current.play()
.catch(()=>{});

}



},[page]);





useEffect(()=>{


if(!audio.current)return;


if(enabled){

audio.current.play()
.catch(()=>{});

}

else{

audio.current.pause();

}



localStorage.setItem(

"music",

enabled?"on":"off"

);



},[enabled]);





return (

<>


<audio

ref={audio}

loop

/>


<button

className="music-button"

onClick={()=>setEnabled(!enabled)}

>

{enabled?"🔊":"🔇"}

</button>


</>

)


}

