const {

createGift,

receiveGift

}=require("../services/giftService");



exports.create=async(req,res)=>{


try{


const gift=

await createGift(

req.body.code,

Number(req.body.gold),

Number(req.body.diamond)

);



res.json(gift);



}catch(e){

res.status(500).json({

error:e.message

});

}



};



exports.receive=async(req,res)=>{


try{


const gift=

await receiveGift(

req.body.telegramId,

req.body.code

);



res.json({

success:true,

gift

});



}catch(e){


res.status(400).json({

error:e.message

});


}


};



