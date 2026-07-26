import React,{useState,useEffect} from "react";
import "./GoldFly.css";


export default function GoldFly({show}){


if(!show)
return null;


return(

<div className="gold-fly">

🪙 +0.5 GOLD

</div>

)

}
