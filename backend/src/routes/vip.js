const router=require("express").Router();


const {
vipTest
}=require("../controllers/vipController");



router.post(
"/test",
vipTest
);



module.exports=router;


