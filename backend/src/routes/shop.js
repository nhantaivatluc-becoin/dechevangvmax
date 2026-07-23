const router=require("express").Router();

const prisma=require("../config/prisma");


router.post("/buy-vip",async(req,res)=>{

const {telegramId}=req.body;


const user=await prisma.user.findUnique({
where:{telegramId}
});


if(!user)
return res.json({
success:false,
message:"User not found"
});


if(Number(user.diamond)<100)
return res.json({
success:false,
message:"Không đủ Diamond"
});


await prisma.user.update({

where:{telegramId},

data:{
diamond:{
decrement:100
},
vip:{
increment:1
}
}

});


res.json({
success:true,
message:"Đã nâng VIP"
});


});


router.post("/exchange",async(req,res)=>{

const {telegramId}=req.body;


const user=await prisma.user.findUnique({
where:{telegramId}
});


if(!user)
return res.json({
success:false
});


await prisma.user.update({

where:{telegramId},

data:{
gold:{
decrement:1000
},
diamond:{
increment:10
}
}

});


res.json({
success:true,
message:"Đổi thành công"
});


});


module.exports=router;
