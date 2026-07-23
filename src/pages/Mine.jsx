import {useEffect,useState} from "react";
import "./Mine.css";


export default function Mine(){


const [gold,setGold]=useState(0);

const [energy,setEnergy]=useState(100);

const [power,setPower]=useState(1);



function mine(){


if(energy<=0) return;


setGold(

g=>g + power

);


setEnergy(

e=>e-1

);


}



useEffect(()=>{


const timer=setInterval(()=>{


setGold(

g=>g+power

);


},60000);



return()=>clearInterval(timer);


},[power]);





return(

<div className="mine-page">


<h1>

⛏ ĐÀO VÀNG ĐẾ CHẾ

</h1>



<div className="mine-card">


<div className="gold-show">

💰 {gold}

</div>



<div className="energy">


⚡ Năng lượng

<div className="energy-bar">

<span

style={{

width:energy+"%"

}}

/>

</div>


</div>




<button

className="mine-button"

onClick={mine}

>

⛏

<br/>

ĐÀO VÀNG

</button>



<p>

+{power} Gold / lần đào

</p>



</div>



</div>

)


}
