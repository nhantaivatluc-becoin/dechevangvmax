import {useState} from "react";
import "./GuildMarket.css";


const items=[


{
id:1,
name:"⚔️ Buff Sức Mạnh",
price:5000,
type:"power"
},


{
id:2,
name:"🔥 Vé Boss Bang",
price:10000,
type:"boss"
},


{
id:3,
name:"🎁 Rương Bang",
price:20000,
type:"chest"
}


];



export default function GuildMarket(){


const [message,setMessage]=useState("");



function buy(item){



let gold=

Number(

localStorage.getItem("gold")

)||0;



if(gold<item.price){


setMessage(

"❌ Không đủ vàng"

);


return;

}



gold-=item.price;



localStorage.setItem(

"gold",

gold

);



let warehouse=

JSON.parse(

localStorage.getItem("guildItems")

)||[];



warehouse.push({

...item,

time:Date.now()

});



localStorage.setItem(

"guildItems",

JSON.stringify(warehouse)

);



setMessage(

"✅ Mua "+item.name+" thành công"

);



}



return(


<div className="guild-market-page">


<h1>

🛒 CHỢ BANG HỘI

</h1>



{

items.map(item=>(



<div

className="market-item"

key={item.id}

>


<h2>

{item.name}

</h2>



<p>

💰 Giá:

{item.price}

</p>



<button

onClick={()=>buy(item)}

>

MUA

</button>


</div>


))


}



<h3>

{message}

</h3>



</div>


)

}
