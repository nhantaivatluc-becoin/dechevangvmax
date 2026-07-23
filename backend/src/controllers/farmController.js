const farm=require("../services/farmService");


exports.get=async(req,res)=>{


const data=

await farm.getFarm(

req.params.userId

);


res.json(data);


};



exports.feed=async(req,res)=>{


const data=

await farm.feedAnimal(

req.body.id

);


res.json(data);


};



exports.collect=async(req,res)=>{


const gold=

await farm.collectGold(

req.body.id

);



res.json({

success:true,

gold

});


};

