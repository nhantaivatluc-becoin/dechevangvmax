import {useState} from "react";
import "./Guild.css";


export default function Guild(){


const oldGuild=

JSON.parse(

localStorage.getItem("guild")

)||null;



const fixedGuild={


name:oldGuild?.name || "",


level:oldGuild?.level || 1,


exp:oldGuild?.exp || 0,


members:

oldGuild?.members || [

"Chiến Binh"

],


power:

oldGuild?.power || 10000


};



const [guild,setGuild]=useState(

oldGuild

?

fixedGuild

:

null

);



const [name,setName]=useState("");



function save(data){

setGuild(data);

localStorage.setItem(

"guild",

JSON.stringify(data)

);

}



function createGuild(){


if(!name)return;



save({

name:name,

level:1,

exp:0,

members:[

"Chiến Binh"

],

power:10000

});


}



function donate(){


let gold=

Number(

localStorage.getItem("gold")

)||0;



if(gold<1000)return;



localStorage.setItem(

"gold",

gold-1000

);



save({

...guild,

exp:guild.exp+1000,

power:guild.power+500

});


}



function upgrade(){


let gold=

Number(

localStorage.getItem("gold")

)||0;



if(gold<5000)return;



localStorage.setItem(

"gold",

gold-5000

);



save({

...guild,

level:guild.level+1,

exp:0,

power:guild.power+5000

});


}



return(

<div className="guild-page">


<h1>

🏰 BANG HỘI

</h1>



{

!guild ?


<div className="guild-card">


<h2>

⚔️ Chưa có Bang

</h2>



<input

placeholder="Tên Bang"

value={name}

onChange={e=>setName(e.target.value)}

/>



<button

onClick={createGuild}

>

🏰 Tạo Bang

</button>



</div>


:


<div className="guild-card">


<h2>

👑 {guild.name}

</h2>



<p>

⭐ Level:

{guild.level}

</p>



<p>

✨ EXP:

{guild.exp}

</p>



<p>

👥 Thành viên:

{guild.members.length}

</p>



<p>

⚔️ Power Bang:

{guild.power}

</p>



<button

onClick={donate}

>

💰 Donate 1000 vàng

</button>



<button

onClick={upgrade}

>

⬆️ Nâng cấp Bang

</button>



</div>


}



</div>

)

}
