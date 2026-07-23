const {
sendChannel
}=require("./channelNotify");



async function vipUp(username,vip){


await sendChannel(`


👑 <b>THĂNG CẤP VIP</b>


⚔️ Người chơi:

<b>${username}</b>


Đã đạt:

🔥 VIP ${vip}


🎉 Chúc mừng chiến binh!



`);

}



module.exports={
vipUp
};

