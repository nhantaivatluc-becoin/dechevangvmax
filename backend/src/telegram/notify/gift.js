const {
sendChannel
}=require("../channelNotify");



async function sendGiftNotify(code,reward){


await sendChannel(`


🎁 <b>GIFT CODE MỚI</b>


🔥 Code:

<code>${code}</code>


💰 Nhận:

${reward}


⏰ Nhập ngay trong Mini App


🐉 ĐẾ CHẾ VÀNG


`);

}


module.exports={
sendGiftNotify
};


