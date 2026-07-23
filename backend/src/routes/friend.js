const router = require("express").Router();

router.get("/",(req,res)=>{
    res.json({
        success:true,
        friends:[]
    });
});

module.exports = router;
