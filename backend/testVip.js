require("dotenv").config();


const {
sendVipNotify
}=require("./src/telegram/notify/vip");



sendVipNotify(
"Kiên",
5
);

