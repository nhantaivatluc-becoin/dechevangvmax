const prisma = require("../config/prisma");

const {
sendVipNotify
}=require("../telegram/notify/vip");



async function updateVip(
telegramId,
newVip
){


const user = await prisma.user.findUnique({

where:{
telegramId:String(telegramId)
}

});



if(!user){

throw new Error(
"User không tồn tại"
);

}




const oldVip=user.vip;



const updated=await prisma.user.update({

where:{
telegramId:String(telegramId)
},


data:{

vip:newVip

}

});




if(newVip>oldVip){


await sendVipNotify(

user.username || user.firstName || "Người chơi",

newVip

);


}



return updated;



}



module.exports={

updateVip

};


