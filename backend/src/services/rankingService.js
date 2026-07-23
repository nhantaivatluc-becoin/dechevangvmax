const prisma = require("../config/prisma");


const {
sendRankingNotify
}=require("../telegram/notify/ranking");



async function sendDailyRanking(){



const players = await prisma.user.findMany({

orderBy:[

{
gold:"desc"
},

{
diamond:"desc"
}

],

take:10

});




const list = players.map(user=>({


username:

user.username ||

user.firstName ||

"Ẩn danh",


gold:

user.gold.toString()



}));




await sendRankingNotify(list);



return list;


}



module.exports={

sendDailyRanking

};


