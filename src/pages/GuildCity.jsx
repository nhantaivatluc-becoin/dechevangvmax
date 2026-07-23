import {useState} from "react";
import "./GuildCity.css";


export default function GuildCity(){


const [city,setCity]=useState(

JSON.parse(

localStorage.getItem("guildCity")

)

||

{

level:1,

defense:100,

power:500,

gold:0

}

);



function save(data){

setCity(data);

localStorage.setItem(

"guildCity",

JSON.stringify(data)

);

}





function upgrade(){


const cost=city.level*1000;



if(city.gold<cost){


alert(

"Cần "+cost+" Gold trong kho bang"

);


return;


}



save({

...city,


level:city.level+1,

defense:city.defense+200,

power:city.power+500,

gold:city.gold-cost


});


}





function addGold(){


save({

...city,

gold:city.gold+1000

});


}





return(


<div className="city-page">


<div className="city-glass">



<h1>

🏰 THÀNH BANG

</h1>




<div className="castle-main">


🏰

<br/>

Thành cấp {city.level}


</div>





<div className="city-info">


<p>

🛡️ Phòng thủ:

{city.defense}

</p>


<p>

⚔️ Sức mạnh:

{city.power}

</p>



<p>

💰 Kho bang:

{city.gold}

</p>


</div>






<button onClick={addGold}>

💰 Nạp kho bang +1000

</button>




<button onClick={upgrade}>

🏗️ Nâng cấp thành

</button>






<div className="building-list">


<div>

🏰 Đại Sảnh Bang

<br/>

Cấp {city.level}

</div>



<div>

🛡️ Thành Phòng Thủ

<br/>

+ {city.defense} phòng thủ

</div>



<div>

⚔️ Võ Đường

<br/>

+ {city.power} sức mạnh

</div>



</div>




</div>


</div>


)

}
