const router=require("express").Router();

const c=require("../controllers/farmController");



router.get(
"/:userId",
c.get
);



router.post(
"/feed",
c.feed
);



router.post(
"/collect",
c.collect
);



module.exports=router;

