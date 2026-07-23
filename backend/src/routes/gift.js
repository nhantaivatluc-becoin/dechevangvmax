const router=require("express").Router();


const {

create,

receive

}=require("../controllers/giftController");



router.post(
"/create",
create
);


router.post(
"/receive",
receive
);



module.exports=router;


