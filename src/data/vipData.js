const vipData = Array.from({length:30},(_,i)=>{

const level=i+1;


let rank="VIP Đồng";
let color="bronze";


if(level>=11 && level<=20){

rank="VIP Bạch Kim";
color="platinum";

}



if(level>=21){

rank="VIP Hoàng Gia";
color="royal";

}



return {


level,


rank,


color,



price:level*500000,



goldBonus:level*5,



diamondBonus:(level*0.1).toFixed(1),



dailyGold:level*10000,



benefits:[


`Tăng ${level*5}% tốc độ đào Gold`,


`Nhận ${(
level*10000
).toLocaleString()} Gold mỗi ngày`,


level>=10
?
"Mở khóa sự kiện VIP"
:
"Huy hiệu VIP",



level>=20
?
"Ưu tiên nhiệm vụ đặc biệt"
:
"Quà VIP hàng ngày",



level>=30
?
"Đặc quyền Đế Chế Hoàng Gia"
:
""



]



}


});



export default vipData;

