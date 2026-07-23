const prisma=require("../config/prisma");


const {
sendGiftNotify
}=require("../telegram/notify/gift");



async function createGift(
code,
gold,
diamond
){


const gift=await prisma.giftCode.create({

data:{

code,

gold,

diamond

}

});



await sendGiftNotify(

code,

`${gold} Gold + ${diamond} Diamond`

);



return gift;


}





async function receiveGift(
telegramId,
code
){



const gift=

await prisma.giftCode.findUnique({

where:{
code
}

});



if(!gift){

throw new Error(
"GiftCode không tồn tại"
);

}



if(gift.used>=gift.limit){

throw new Error(
"GiftCode đã hết lượt"
);

}




await prisma.user.update({

where:{
telegramId:String(telegramId)
},


data:{

gold:{
increment:gift.gold
},

diamond:{
increment:gift.diamond
}

}

});




await prisma.giftCode.update({

where:{
code
},

data:{

used:{
increment:1
}

}

});



return gift;


}



module.exports={

createGift,

receiveGift

};


