const router=require("express").Router();


const e=require("../controllers/economyController");



router.post("/exchange",e.exchange);


router.post("/giftcode",e.giftcode);


router.get("/ranking",e.ranking);


router.post("/referral",e.referral);



module.exports=router;

