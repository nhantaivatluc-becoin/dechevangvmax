import {useState} from "react";

export default function GiftCode(){

const [code,setCode]=useState("");

const [message,setMessage]=useState("");

const [reward,setReward]=useState(null);

const [open,setOpen]=useState(false);



async function redeem(){


try{


const res=await fetch(

"http://localhost:3000/api/giftcode/redeem",

{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

telegramId:"8454844333",

code

})

}

);



const data=await res.json();



if(data.success){


setReward(data.reward);

setOpen(true);


setMessage("🎉 NHẬN QUÀ THÀNH CÔNG");


}else{


setMessage("❌ "+data.message);


}



}catch(e){


setMessage("SERVER ERROR");


}


}



return(

<div className="gift-box">


<div className="gift-icon">

🎁

</div>


<h2>

NHẬP GIFTCODE

</h2>



<input

value={code}

onChange={(e)=>setCode(e.target.value)}

placeholder="Nhập mã quà tặng"

/>



<button onClick={redeem}>

🎁 NHẬN QUÀ

</button>



<p>

{message}

</p>



{

open && reward &&

<div className="reward-popup">


<div className="gift-open">

🎁✨

</div>


<h2>

CHÚC MỪNG!

</h2>


<div className="coin">

🪙 +{reward.gold} GOLD

</div>


<div className="diamond">

💎 +{reward.diamond} DIAMOND

</div>



<button

onClick={()=>setOpen(false)}

>

ĐÓNG

</button>


</div>

}



</div>

);


}
