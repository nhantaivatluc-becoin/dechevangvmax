import React,{useState} from "react";

import "./DailyReward.css";


export default function DailyReward({

vip,

userId,

reload

}){


const [message,setMessage]=useState("");



async function claimNormal(){


const res=await fetch(

"http://localhost:3000/api/daily/normal",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

userId

})

}

);


const data=await res.json();


setMessage(data.message);


reload();


}







async function claimVip(){


const res=await fetch(

"http://localhost:3000/api/daily/vip",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

userId

})

}

);



const data=await res.json();


setMessage(data.message);


reload();


}







return(

<div className="daily-container">


<h2>

🎁 Nhận Thưởng

</h2>



<div className="daily-card">


<h3>

🎁 Thành viên thường

</h3>


<p>

🪙 +500 Gold

</p>


<button onClick={claimNormal}>

Nhận thưởng

</button>


</div>






<div className="daily-card vip-card">


<h3>

👑 Thành viên VIP

</h3>



{

vip>=1

?

<>

<p>

🪙 +2000 Gold

</p>


<p>

💎 +10 Diamond

</p>


<button onClick={claimVip}>

Nhận VIP

</button>


</>


:

<p>

🔒 Cần VIP 1 trở lên

</p>


}



</div>




<p>

{message}

</p>



</div>


)

}

