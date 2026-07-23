const router=require("express").Router();

const {
telegramLogin

}=require("../controllers/authController");


router.post("/telegram",telegramLogin);


module.exports=router;
