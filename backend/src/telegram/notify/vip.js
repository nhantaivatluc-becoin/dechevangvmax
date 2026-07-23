const {
sendChannel
}=require("../channelNotify");


async function sendVipNotify(username,vip){


await sendChannel(`

👑 <b>THĂNG CẤP VIP</b>


⚔️ Người chơi:

<b>${username}</b>


🔥 Đã đạt:

<b>VIP ${vip}</b>


🎉 Chúc mừng chiến binh Đế Chế Vàng!


🐉 @DeCheVangOfficial

`);

}


module.exports={
sendVipNotify
};

