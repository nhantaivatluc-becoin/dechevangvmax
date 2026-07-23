import {useState} from "react";
import "./GuildBattle.css";


export default function GuildBattle(){


const [heroes]=useState(

JSON.parse(

localStorage.getItem("heroes")

)

||[]

);



const [score,setScore]=useState(

Number(localStorage.getItem("guildScore"))

||0

);



const [message,setMessage]=useState("");





const power = heroes.reduce(

(sum,h)=>sum+h.power,

0

);





function battle(){


const enemy=Math.floor(

Math.random()*5000

)+500;



if(power >= enemy){


setScore(score+100);



setMessage(

"🏆 Chiến thắng! +100 điểm Bang"

);


localStorage.setItem(

"guildScore",

score+100

);



}

else{


setMessage(

"💥 Thất bại! Cần nâng cấp nhân vật"

);


}





}




return(


<div className="guild-page">


<div className="guild-glass">



<h1>

⚔️ BANG ĐẠI CHIẾN

</h1>





<div className="castle-guild">


🏰

<br/>

THÀNH BANG


</div>






<div className="guild-info">


<h2>

👥 Đội hình

</h2>


<p>

🧍 Nhân vật:

{heroes.length}

</p>



<p>

⚔️ Sức mạnh:

{power}

</p>



<p>

🏆 Điểm bang:

{score}

</p>



</div>






<button

className="battle-btn"

onClick={battle}

>

⚔️ THAM CHIẾN

</button>






{

message &&

<div className="battle-message">

{message}

</div>

}




<div className="rank-box">


<h2>

🏆 Xếp hạng Bang

</h2>


<p>

🥇 Bang Đế Chế

</p>


<p>

🥈 Bang Hắc Long

</p>


<p>

🥉 Bang Thiên Hà

</p>


</div>





</div>


</div>


)


}
