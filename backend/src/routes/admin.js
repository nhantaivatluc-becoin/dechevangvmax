const router=require("express").Router();

const admin=require("../controllers/adminController");


router.get("/bank",admin.bank);


router.post("/bank/update",admin.updateBank);


router.get("/transactions",admin.transactions);


router.post("/approve/:id",admin.approve);


module.exports=router;

