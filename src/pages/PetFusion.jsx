import {useState} from "react";
import "./PetFusion.css";


export default function PetFusion(){


const [result,setResult]=useState(null);



function fusion(){


setResult({

name:"🐲 Hắc Long Thức Tỉnh",

power:30000,

level:1

});


}



return(

<div className="fusion">


<h1>
🧬 GHÉP PET
</h1>


<div className="fusion-card">


<p>
🔥 Hỏa Long
</p>


+

<p>
🦁 Sư Tử Vàng
</p>


<button onClick={fusion}>

🧬 Ghép Pet

</button>



{

result &&

<div>

<h2>
Kết quả
</h2>

<h3>
{result.name}
</h3>

<p>
⚔️ Power {result.power}
</p>

</div>

}



</div>


</div>

)

}
