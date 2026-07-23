import {useEffect,useState} from "react";
import "./Notify.css";


export default function Notify(){


const [msg,setMsg]=useState("");



useEffect(()=>{


window.showNotify=(text)=>{


setMsg(text);


setTimeout(()=>{

setMsg("");

},2500);


};



},[]);



if(!msg)return null;



return(

<div className="notify">

{msg}

</div>

)

}
