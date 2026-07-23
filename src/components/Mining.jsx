import "./Mining.css";

import {useState} from "react";


export default function Mining({price,onMine}){


const [effect,setEffect]=useState(false);

const [gain,setGain]=useState(0);




function mine(){


const amount =

0.5 *

(price/1000);



setGain(amount);



onMine(amount);



setEffect(true);



setTimeout(()=>{


setEffect(false);


},800);


}





return(


<div

className={

effect

?

"mining-box active"

:

"mining-box"

}

>




{

effect &&

<div className="gold-fly">

+{gain.toFixed(2)} 🟡

</div>


}






<div className="mine-icon">


⛰️💰


</div>




<h2>

⛏️ MỎ ĐÀO VÀNG

</h2>




<p>

Giá vàng hiện tại:

</p>


<h3>

🟡 {price.toFixed(2)}

</h3>




<p>

Sản lượng thay đổi theo thị trường

</p>




<button

onClick={mine}

>

⛏️ ĐÀO VÀNG

</button>




</div>


)


}
