const prisma = require("../config/prisma");


exports.telegramLogin = async (req,res)=>{

try{

const {
telegramId,
username,
firstName,
lastName

}=req.body;



let user = await prisma.user.findUnique({

where:{
telegramId:String(telegramId)
}

});



if(!user){

user = await prisma.user.create({

data:{

telegramId:String(telegramId),

username,

firstName,

lastName

}

});

}



res.json({

success:true,

user

});



}catch(err){

console.log(err);

res.status(500).json({

success:false,

error:err.message

});

}


};
