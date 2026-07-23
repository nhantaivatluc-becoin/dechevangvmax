const router=require("express").Router();

const {
spin
}=require("../controllers/wheelController");


router.post("/spin",spin);


module.exports=router;
