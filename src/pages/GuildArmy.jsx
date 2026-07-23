import {useState} from "react";
import "./GuildArmy.css";


export default function GuildArmy(){


const [members,setMembers]=useState(

JSON.parse(

localStorage.getItem("guildMembers")

)

||[

{

name:"ADMIN",

power:5000,

join:false

},

{

name:"Chiến Binh 1",

power:2000,

join:false

},

{

name:"Pháp Sư 1",

power:3000,

join:false

}

]

);



const [city,setCity]=useState(

JSON.parse(

localStorage.getItem("guildCityArmy")

)

||{

name:"🌲 Rừng Cổ",

army:0,

defense:1000

}

);



const [score,setScore]=useState(

Number(localStorage.getItem("guildWarScore"))

||0

);





function selectMember(index){


const list=[...members];


list[index].join=!list[index].join;


setMembers(list);



localStorage.setItem(

"guildMembers",

JSON.stringify(list)

);


}





function sendArmy(){


const power=members


.filter(m=>m.join)


.reduce(

(a,b)=>a+b.power,

0

);



setCity({

...city,

army:city.army+power,

defense:city.defense+power/2

});



setScore(score+power);



localStorage.setItem(

"guildCityArmy",

JSON.stringify({

...city,

army:city.army+power,

defense:city.defense+power/2

})

);



localStorage.setItem(

"guildWarScore",

score+power

);


alert(

"⚔️ Đã gửi "+power+" quân lực"

);


}




return(


<div className="army-page">


<div className="army-glass">



<h1>

🧍 QUÂN ĐOÀN BANG

</h1>




<p>

🏆 Điểm Bang:

{score}

</p>




<div className="city-defense">


🏰 Thành:

{city.name}

<br/>

🛡️ Phòng thủ:

{city.defense}

<br/>

⚔️ Quân đóng:

{city.army}


</div>





<h2>

👥 Thành viên

</h2>




{

members.map((m,i)=>(


<div

className={

m.join?

"member active":

"member"

}

key={i}

onClick={()=>selectMember(i)}

>


🧍 {m.name}


<br/>

⚔️ Sức mạnh:

{m.power}


<br/>


{

m.join?

"✅ Đang tham chiến":

"⭕ Chưa tham gia"

}



</div>


))


}




<button

onClick={sendArmy}

>

⚔️ GỬI QUÂN CHIẾN ĐẤU

</button>




</div>


</div>


)

}
