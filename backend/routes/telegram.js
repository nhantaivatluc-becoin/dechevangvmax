const express = require("express");

const router = express.Router();


const prisma = require("../src/config/prisma");





router.post("/sync", async(req,res)=>{


try{


const {

telegramId,

username

}=req.body;





if(!telegramId){


return res.status(400).json({


error:"Missing telegramId"


});


}







let user = await prisma.user.findUnique({


where:{


telegramId:String(telegramId)


}


});







if(!user){



user = await prisma.user.create({


data:{


telegramId:String(telegramId),


username:username || "Miner",


gold:1000,


diamond:0,


vip:0,


invite:0


}


});



}






res.json({


success:true,


user


});




}catch(error){



console.log(error);



res.status(500).json({


error:error.message


});



}



});







module.exports = router;

