import {useState,useEffect} from "react";
import "./GuildDefense.css";


export default function GuildDefense(){


const [defense,setDefense]=useState(

JSON.parse(

localStorage.getItem("guildDefense")

)

||

{

wall:5000,

shield:true,

shieldTime:3600,

score:0

}

);



const [message,setMessage]=useState("");





useEffect(()=>{


if(!defense.shield)return;



const timer=setInterval(()=>{


let time=defense.shieldTime-1;



if(time<=0){


setDefense({

...defense,

shield:false,

shieldTime:0

});


localStorage.setItem(

"guildDefense",

JSON.stringify({

...defense,

shield:false,

shieldTime:0

})

);


}



else{


setDefense({

...defense,

shieldTime:time

});


}



},1000);



return()=>clearInterval(timer);



},[defense]);







function enemyAttack(){



if(defense.shield){


setMessage(

"🛡️ Thành đang có khiên bảo vệ"

);


return;


}



const damage=

Math.floor(

Math.random()*1000

)+500;



const hp=Math.max(

0,

defense.wall-damage

);



setDefense({

...defense,

wall:hp,

score:defense.score+50

});



localStorage.setItem(

"guildDefense",

JSON.stringify({

...defense,

wall:hp,

score:defense.score+50

})

);



setMessage(

"⚔️ Thành bị tấn công -"+damage+" phòng thủ"

);



}




function activeShield(){



const data={

...defense,

shield:true,

shieldTime:3600

};



setDefense(data);



localStorage.setItem(

"guildDefense",

JSON.stringify(data)

);


}





return(


<div className="defense-page">


<div className="defense-glass">



<h1>

🛡️ PHÒNG THỦ THÀNH BANG

</h1>



<div className="castle">


🏰

<br/>

THÀNH BANG


</div>




<div className="status">


🧱 Tường thành:

{defense.wall}


<br/>

🏆 Điểm phòng thủ:

{defense.score}


<br/>

{

defense.shield

?

"🛡️ Đang có khiên"

:

"⚠️ Không có khiên"

}



</div>





<button

onClick={enemyAttack}

>

⚔️ Kẻ Địch Tấn Công

</button>




<button

onClick={activeShield}

>

🛡️ Bật Khiên 1 Giờ

</button>




<div className="message">

{message}

</div>




</div>


</div>


)

}
