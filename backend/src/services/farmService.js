const prisma=require("../config/prisma");


async function getFarm(userId){

return await prisma.animal.findMany({

where:{
userId:Number(userId)
}

});

}



async function collectGold(id){


const pet = await prisma.animal.findUnique({

where:{
id:Number(id)
}

});


if(!pet) return 0;



const now=new Date();


const last=new Date(pet.lastCollect);



const minutes=Math.floor(

(now-last)/(1000*60)

);



const gold =

minutes *

pet.power *

pet.level;



await prisma.animal.update({

where:{
id:Number(id)
},

data:{

lastCollect:now

}

});


return gold;


}



async function feedAnimal(id){


return await prisma.animal.update({

where:{
id:Number(id)
},

data:{

health:{
increment:10
}

}

});


}



module.exports={

getFarm,

collectGold,

feedAnimal

};

