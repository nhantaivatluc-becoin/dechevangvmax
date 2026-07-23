const {
updateVip
}=require("../services/vipService");



exports.vipTest=async(req,res)=>{


try{


const {

telegramId,

vip

}=req.body;



const user=await updateVip(

telegramId,

Number(vip)

);



res.json({

success:true,

user

});


}

catch(e){


res.status(500).json({

error:e.message

});


}


};


