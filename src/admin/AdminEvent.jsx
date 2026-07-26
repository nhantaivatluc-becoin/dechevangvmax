import React,{useState} from "react";


export default function AdminEvent(){


const [question,setQuestion]=useState("");

const [answer,setAnswer]=useState("");

const [reward,setReward]=useState(1000);




async function createEvent(){


await fetch(

"http://localhost:3000/api/admin/event/create",

{

method:"POST",

headers:{

"Content-Type":"application/json",

Authorization:
"Bearer "+
localStorage.getItem("adminToken")

},


body:JSON.stringify({

question,

answer,

gold:Number(reward)

})


}

);



alert(
"Đã tạo Event"
);


}




return (

<div>


<h2>
🎁 TẠO EVENT
</h2>



<input

placeholder="Câu hỏi"

value={question}

onChange={
e=>setQuestion(e.target.value)
}

/>



<br/>



<input

placeholder="Đáp án"

value={answer}

onChange={
e=>setAnswer(e.target.value)
}

/>



<br/>



<input

type="number"

value={reward}

onChange={
e=>setReward(e.target.value)
}

/>



<br/>



<button

onClick={createEvent}

>

Tạo Event

</button>



</div>

)


}
