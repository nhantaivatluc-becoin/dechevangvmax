const {
sendChannel
}=require("../channelNotify");



async function sendRankingNotify(players){


let text = `

🏆 <b>BẢNG XẾP HẠNG ĐẾ CHẾ VÀNG</b>


`;



players.forEach((p,index)=>{


text += `

${index+1}. 👤 ${p.username}

💰 Gold: ${p.gold}

`;


});



text += `

🔥 Chúc mừng các chiến binh!


🐉 @DeCheVangOfficial

`;



await sendChannel(text);


}



module.exports={
sendRankingNotify
};


