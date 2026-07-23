const prisma=require("../config/prisma");


// xem ngân hàng
exports.bank=async(req,res)=>{

const data=await prisma.bankConfig.findFirst();

res.json({
success:true,
data
});

};


// đổi thông tin ngân hàng
exports.updateBank=async(req,res)=>{


const {
bankName,
accountNumber,
accountOwner,
content
}=req.body;


const old=await prisma.bankConfig.findFirst();


const data=await prisma.bankConfig.update({

where:{
id:old.id
},

data:{

bankName,
accountNumber,
accountOwner,
content

}

});


res.json({

success:true,

data

});


};



// danh sách giao dịch
exports.transactions=async(req,res)=>{


const list=await prisma.transaction.findMany({

orderBy:{
createdAt:"desc"
}

});


res.json({

success:true,

list

});


};


// duyệt giao dịch

exports.approve=async(req,res)=>{


const id=Number(req.params.id);


const tx=await prisma.transaction.update({

where:{
id
},

data:{
status:"approved"
}

});



res.json({

success:true,

tx

});


};


