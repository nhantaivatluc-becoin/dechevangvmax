const router=require("express").Router();

const {
wallet
}=require("../controllers/walletController");


router.get("/:id",wallet);


module.exports=router;

