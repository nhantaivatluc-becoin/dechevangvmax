const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");


const app = express();


// ===== SECURITY =====

app.use(
helmet({
contentSecurityPolicy:false
})
);


app.use(cors({

origin:"*",

methods:[
"GET",
"POST",
"PUT",
"DELETE"
]

}));


// ===== BASIC =====

app.use(compression());

app.use(morgan("dev"));

app.use(express.json({

limit:"20mb"

}));


app.use(express.urlencoded({

extended:true,

limit:"20mb"

}));




// ===== ROUTES =====


// auth

app.use(
"/api/auth",
require("./routes/auth")
);


// transaction

app.use(
"/api/transaction",
require("./routes/transaction")
);


// shop

app.use(
"/api/shop",
require("./routes/shop")
);


// gift

app.use(
"/api/gift",
require("./routes/gift")
);


// wheel

app.use(
"/api/wheel",
require("./routes/wheel")
);




// ===== TEST =====

app.get("/",(req,res)=>{


res.json({

success:true,

name:"De Che Vang API",

version:"1.0.0",

message:"Server running"

});


});



// ===== ERROR =====

app.use((err,req,res,next)=>{


console.error(err);


res.status(500).json({

success:false,

message:"Server error"

});


});



module.exports=app;

