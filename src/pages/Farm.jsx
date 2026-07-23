import "./Farm.css";

import {useState} from "react";


export default function Farm(){


const [level,setLevel]=useState(1);

const [gold,setGold]=useState(0);



function upgrade(){


setLevel(level+1);


}



function harvest(){


setGold(
gold + (level * 20)
);


}



return(


<div className="farm">


<h1>

🐾 TRANG TRẠI PET

</h1>



<div className="pet-card">



<div className="pet">

🐉

</div>



<h2>

Rồng Vàng

</h2>



<p>

⭐ Level:

<b>
{level}
</b>

</p>



<p>

⚔️ Power:

<b>
{level*50}
</b>

</p>



<p>

🟡 Gold thu hoạch:

<b>
{gold}
</b>

</p>



<button
onClick={upgrade}
>

⬆️ NÂNG CẤP PET

</button>




<button
onClick={harvest}
>

🌾 THU HOẠCH

</button>



</div>




<div className="farm-info">


<h2>

📜 Thông tin

</h2>


<p>
🐉 Pet tự động đào vàng
</p>


<p>
⚡ Level càng cao nhận càng nhiều Gold
</p>


<p>
🔥 Mở khóa Pet hiếm sau này
</p>


</div>



</div>


)


}
