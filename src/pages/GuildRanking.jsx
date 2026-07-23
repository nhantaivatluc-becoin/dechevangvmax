import "./GuildRanking.css";


export default function GuildRanking(){



const myGuild=

JSON.parse(

localStorage.getItem("guild")

)||null;



const guilds=[


{

name:"🐉 Long Thần Điện",

level:50,

members:100,

power:900000,

exp:500000

},


{

name:"⚔️ Thiên Kiếm Bang",

level:35,

members:80,

power:500000,

exp:300000

},


{

name:"🔥 Hắc Long Hội",

level:20,

members:50,

power:200000,

exp:100000

}


];



if(myGuild){


guilds.push({


name:"👑 "+myGuild.name,

level:myGuild.level||1,

members:

myGuild.members?.length||1,

power:myGuild.power||0,

exp:myGuild.exp||0


});


}



const ranking=[...guilds].sort(

(a,b)=>

b.power-a.power

);



return(


<div className="guild-ranking-page">


<h1>

🏆 BXH BANG HỘI

</h1>



{

ranking.map((guild,index)=>(



<div

key={index}

className={

"rank-guild rank-"+(index+1)

}

>


<h1>

{

index===0

?

"👑"

:

index===1

?

"🥈"

:

index===2

?

"🥉"

:

"#"+(index+1)

}

</h1>



<h2>

{guild.name}

</h2>



<p>

⭐ Level Bang:

{guild.level}

</p>



<p>

👥 Thành viên:

{guild.members}

</p>



<p>

⚔️ Power:

{guild.power}

</p>



<p>

✨ EXP:

{guild.exp}

</p>



</div>


))


}



</div>


)

}
