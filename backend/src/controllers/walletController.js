const prisma=require("../config/prisma");


exports.wallet=async(req,res)=>{


const userId=req.params.id;


const user=await prisma.user.findUnique({

where:{
id:Number(userId)
}

});


res.json({

success:true,

wallet:user

});


}

