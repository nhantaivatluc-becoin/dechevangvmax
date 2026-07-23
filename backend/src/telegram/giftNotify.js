const {
sendChannel
}=require("./channelNotify");



async function newGiftCode(code,reward){


await sendChannel(`


🎁 <b>GIFT CODE MỚI</b>


🔥 Code:

<code>${code}</code>


💰 Phần thưởng:

${reward}


🐉 Nhập ngay trong Mini App Đế Chế Vàng



`);

}



module.exports={
newGiftCode
};

