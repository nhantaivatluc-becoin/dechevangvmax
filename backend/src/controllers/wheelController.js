const prisma=require("../config/prisma");


exports.spin=async(req,res)=>{

try{

const {telegramId}=req.body;


const user=await prisma.user.findUnique({

where:{
telegramId:String(telegramId)
}

});


if(!user){

return res.json({
success:false,
message:"User not found"
});

}


// phần thưởng

const rewards=[

{
name:"100 Gold",
type:"gold",
value:100
},

{
name:"500 Gold",
type:"gold",
value:500
},

{
name:"1 Diamond",
type:"diamond",
value:1
},

{
name:"VIP",
type:"vip",
value:1
}

];


const reward=
rewards[Math.floor(Math.random()*rewards.length)];



let data={};


if(reward.type==="gold"){

data.gold={
increment:reward.value
};

}


if(reward.type==="diamond"){

data.diamond={
increment:reward.value
};

}


if(reward.type==="vip"){

data.vip={
increment:reward.value
};

}



await prisma.user.update({

where:{
telegramId:String(telegramId)
},

data

});



await prisma.wheelSpin.create({

data:{
telegramId:String(telegramId),
reward:reward.name,
amount:reward.value
}

});



res.json({

success:true,
reward

});


}catch(e){

res.json({

success:false,
error:e.message

});

}


};
