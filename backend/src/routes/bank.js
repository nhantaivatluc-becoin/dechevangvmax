const router=require("express").Router();

const bank=require("../controllers/bankController");


router.get("/",bank.getBank);


module.exports=router;

