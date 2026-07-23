const prisma=require("./src/config/prisma");


async function main(){


const exists = await prisma.bankConfig.findFirst();


if(exists){

console.log("BANK EXISTS");

return;

}


await prisma.bankConfig.create({

data:{


bankName:"MB BANK",


accountNumber:"0123456789",


accountOwner:"DE CHE VANG",


content:"NAPTIEN USERID"


}


});


console.log("BANK CREATED");


}


main()
.catch(e=>{

console.error(e);

})
.finally(async()=>{

await prisma.$disconnect();

});

