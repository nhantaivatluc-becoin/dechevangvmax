import "./PetShop.css";


export default function PetShop(){


const buy=()=>{

localStorage.setItem(

"activePet",

JSON.stringify({

name:"🐉 Rồng Lửa",

power:10000

})

);

alert("Đã mua Pet");

};



return(

<div className="pet-shop">


<h1>
🛒 SHOP PET
</h1>


<div className="shop-card">


<h2>
🐉 Rồng Lửa
</h2>


<p>
⚔️ Power 10000
</p>


<button onClick={buy}>

Mua Pet

</button>


</div>


</div>

)

}
