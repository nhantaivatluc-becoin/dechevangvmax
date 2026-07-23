const prisma=require("../config/prisma");


exports.spin=async(req,res)=>{

const {
userId
}=req.body;



const user=await prisma.user.findUnique({

where:{
id:Number(userId)
}

});


if(!user){

return res.status(404).json({

message:"Không tìm thấy user"

});

}



if(Number(user.diamond)<0.01){

return res.status(400).json({

message:"Không đủ Diamond"

});

}



const rewards=[

"1000 GOLD",
"5000 GOLD",
"0.01 DIAMOND",
"VIP 1 NGÀY",
"0.05 DIAMOND",
"10000 GOLD"

];



const reward=
rewards[
Math.floor(Math.random()*rewards.length)
];



await prisma.user.update({

where:{
id:Number(userId)
},

data:{

diamond:{
decrement:0.01
}

}

});



await prisma.wheelHistory.create({

data:{

userId:Number(userId),

reward

}

});



res.json({

success:true,

reward

});


};
