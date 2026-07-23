const prisma=require("../config/prisma");


exports.getBank=async(req,res)=>{


const bank=await prisma.bankConfig.findFirst();


res.json({

success:true,

bank

});


};


