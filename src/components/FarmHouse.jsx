import {useState} from "react";
import "./FarmHouse.css";


export default function FarmHouse(){


const [level,setLevel]=useState(1);

const [food,setFood]=useState(100);


const upgrade=()=>{


setLevel(level+1);


};



const feed=()=>{


if(food>=10){

setFood(food-10);

}

};



return(

<div className="farm-house">


<h2>

🏡 CHUỒNG NUÔI CẤP {level}

</h2>



<div className="farm-yard">


<div className="animal-walk">

🐮

</div>


<div className="animal-walk second">

🐔

</div>


<div className="animal-walk third">

🐉

</div>


</div>




<p>

🥕 Kho thức ăn: {food}

</p>



<button onClick={feed}>

🥕 Cho ăn

</button>



<button onClick={upgrade}>

⬆ Nâng cấp chuồng

</button>



</div>


)

}
