const prisma = require("../config/prisma");
const jwt = require("jsonwebtoken");


exports.telegramLogin = async (req,res)=>{

try{

const {
telegramId,
username,
firstName,
lastName
}=req.body;


if(!telegramId){

return res.status(400).json({
success:false,
message:"Missing telegram id"
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

username:username || "",

firstName:firstName || "",

lastName:lastName || "",

gold:1000,

diamond:0,

level:1,

exp:0,

vip:0

}

});

}



const token = jwt.sign(

{
id:user.id,
telegramId:user.telegramId
},

process.env.JWT_SECRET,

{
expiresIn:"30d"
}

);



res.json({

success:true,

token,

user

});


}catch(err){

console.log(err);


res.status(500).json({

success:false,

message:"Login error"

});

}


};

