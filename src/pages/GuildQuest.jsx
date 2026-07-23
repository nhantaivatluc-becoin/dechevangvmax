import {useState} from "react";
import "./GuildQuest.css";


export default function GuildQuest(){


const [point,setPoint]=useState(

Number(localStorage.getItem("guildPoint")) || 0

);



function complete(){


let p=point+100;


setPoint(p);


localStorage.setItem(

"guildPoint",

p

);


alert(

"🎉 Hoàn thành nhiệm vụ +100 cống hiến"

);


}



return(

<div className="guild-page">


<div className="guild-box">


<h1>

📜 NHIỆM VỤ BANG

</h1>



<div>

🔥 Điểm cống hiến:

<b>

{point}

</b>

</div>



<div className="quest">


⚔️ Đánh quái 10 lần

<br/>

🎁 Thưởng: 100 cống hiến


</div>



<button

onClick={complete}

>

✅ Hoàn thành

</button>



</div>

</div>

)

}
