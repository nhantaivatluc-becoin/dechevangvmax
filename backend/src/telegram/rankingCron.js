const cron=require("node-cron");


const {
sendDailyRanking
}=require("../services/rankingService");




// Mỗi ngày 20:00

cron.schedule(
"0 20 * * *",

async()=>{


console.log(
"🏆 Gửi BXH..."
);


await sendDailyRanking();



}

);



console.log(
"Ranking cron started"
);


