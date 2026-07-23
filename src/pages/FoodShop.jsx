import "./FoodShop.css";


export default function FoodShop(){


function buy(){


let gold=

Number(localStorage.getItem("gold"))||0;



if(gold<1000){

alert("❌ Không đủ vàng");

return;

}



let food=

Number(localStorage.getItem("food"))||0;



gold-=1000;

food+=50;



localStorage.setItem("gold",gold);

localStorage.setItem("food",food);



alert(

"🍖 Nhận +50 thức ăn"

);


}



return(

<div className="food-shop">


<h1>

🍖 SHOP THỨC ĂN

</h1>


<h2>

1000 vàng = 50 thức ăn

</h2>



<button onClick={buy}>

Mua thức ăn

</button>


</div>

)

}
