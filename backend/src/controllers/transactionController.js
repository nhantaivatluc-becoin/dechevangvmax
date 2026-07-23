const prisma = require("../config/prisma");


// =======================
// QUY ĐỔI
// 0.1 Diamond = 25 VNĐ
// 1 Diamond = 250 VNĐ
// =======================

const DIAMOND_RATE = 250;



exports.deposit = async(req,res)=>{

try{

const {
userId,
amount
}=req.body;



const tx = await prisma.transaction.create({

data:{


userId:Number(userId),


type:"deposit",


amount:Number(amount),


status:"pending"


}

});


res.json({

success:true,

message:"Đã tạo yêu cầu nạp",

transaction:tx

});


}catch(e){

res.status(500).json({

message:e.message

});

}

};





exports.withdraw = async(req,res)=>{


try{


const {

userId,

amount,

bank,

account,

owner

}=req.body;



const diamond = Number(amount);



if(diamond < 100){

return res.status(400).json({

message:"Tối thiểu rút 100 Diamond"

});

}




// kiểm tra 3 lần rút

const today = new Date();

today.setHours(0,0,0,0);



const count = await prisma.transaction.count({

where:{


userId:Number(userId),


type:"withdraw",


createdAt:{


gte:today


}

}

});



if(count >= 3){

return res.status(400).json({

message:"Bạn đã đạt giới hạn 3 lần rút hôm nay"

});

}





const money = diamond * DIAMOND_RATE;




const tx = await prisma.transaction.create({

data:{


userId:Number(userId),


type:"withdraw",


amount:money,


diamond:diamond,


bank:bank || "",


account:account || "",


owner:owner || "",


status:"pending"


}

});





res.json({

success:true,

message:"Đã gửi yêu cầu rút",

diamond,

money,

transaction:tx


});



}catch(e){


res.status(500).json({

message:e.message

});


}


};






exports.history = async(req,res)=>{


try{


const list = await prisma.transaction.findMany({

where:{


userId:Number(req.params.id)


},


orderBy:{


createdAt:"desc"


}

});


res.json({

success:true,

list

});


}catch(e){


res.status(500).json({

message:e.message

});


}


};