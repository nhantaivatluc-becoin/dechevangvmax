
app.use('/api/wallet',require('./routes/wallet'));

app.use('/api/transaction',require('./routes/transaction'));

app.use('/api/admin',require('./routes/admin'));

app.use('/api/bank',require('./routes/bank'));

app.use('/api/farm',require('./routes/farm'));

app.use('/api/auth',require('./routes/authTelegram'));

const vipRoute=require("./routes/vip");

app.use("/api/vip",vipRoute);


const giftRoute=require("./routes/gift");

app.use("/api/gift",giftRoute);

