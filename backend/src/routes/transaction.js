const router=require("express").Router();


const t=require("../controllers/transactionController");



router.post("/deposit",t.deposit);


router.post("/withdraw",t.withdraw);


router.get("/history/:id",t.history);



module.exports=router;

