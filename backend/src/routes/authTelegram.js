const router=require("express").Router();

const auth=require("../controllers/authTelegram");


router.post("/telegram",auth.telegram);



module.exports=router;

