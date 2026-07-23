const prisma=require("../config/prisma");


// 1. ĐỔI VÀNG

exports.exchange=async(req,res)=>{


const {
userId,
gold
}=req.body;


const need=1800000;


if(Number(gold)<need){

return res.json({

success:false,

message:"Không đủ vàng"

});

}



const diamond=(Number(gold)/need)*0.1;



const user=await prisma.user.update({

where:{
id:Number(userId)
},


data:{


gold:{
decrement:BigInt(gold)
},


diamond:{
increment:diamond
}


}


});



res.json({

success:true,

user

});


};





// 2. NHẬN GIFTCODE


exports.giftcode=async(req,res)=>{


const {

userId,

code

}=req.body;



const gift=await prisma.giftCode.findUnique({

where:{
code
}

});



if(!gift){

return res.json({

success:false,

message:"GiftCode không tồn tại"

});

}



if(gift.used>=gift.limit){

return res.json({

success:false,

message:"GiftCode hết lượt"

});

}



await prisma.user.update({

where:{
id:Number(userId)
},

data:{


gold:{
increment:gift.gold
},


diamond:{
increment:gift.diamond
},


vip:{
increment:gift.vip
}


}

});



await prisma.giftCode.update({

where:{
id:gift.id
},

data:{


used:{
increment:1
}


}

});



res.json({

success:true,

message:"Nhận quà thành công"

});


};





// 3. BXH


exports.ranking=async(req,res)=>{


const users=await prisma.user.findMany({

orderBy:{

gold:"desc"

},


take:20

});



res.json({

success:true,

users

});


};




// 4. MỜI BẠN


exports.referral=async(req,res)=>{


const {

ownerId,

friendId

}=req.body;



await prisma.referral.create({

data:{

ownerId,

friendId,

reward:10000

}

});



await prisma.user.update({

where:{
telegramId:ownerId
},

data:{


gold:{
increment:10000
}


}

});



res.json({

success:true

});


};


