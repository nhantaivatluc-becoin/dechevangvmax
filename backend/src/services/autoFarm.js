const prisma=require("../config/prisma");


async function autoFarm(){


const pets=

await prisma.animal.findMany();



for(const pet of pets){


const minutes=Math.floor(

(new Date()-pet.lastCollect)

/

(1000*60)

);



if(minutes>0){


const gold=

minutes *

pet.power *

pet.level;



await prisma.user.update({

where:{
id:pet.userId
},

data:{

gold:{
increment:gold
}

}

});



await prisma.animal.update({

where:{
id:pet.id
},

data:{

lastCollect:new Date()

}

});


console.log(

`Pet ${pet.type} +${gold} Gold`

);


}


}


}



setInterval(

autoFarm,

60000

);

console.log(

"🐉 Auto Farm Started"

);

