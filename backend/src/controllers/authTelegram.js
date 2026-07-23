const prisma=require("../config/prisma");


exports.telegram=async(req,res)=>{


const {

telegramId,

username,

firstName

}=req.body;



let user=await prisma.user.findUnique({

where:{
telegramId
}

});



if(!user){


user=await prisma.user.create({

data:{


telegramId,

username,


gold:1000,


diamond:0,


vip:0,


balance:0


}


});


}



res.json({

success:true,

user

});


}

