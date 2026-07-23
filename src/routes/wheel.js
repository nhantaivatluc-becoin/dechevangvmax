const router=require("express").Router();

const wheel=require("../controllers/wheelController");


router.post(
"/spin",
wheel.spin
);


module.exports=router;
