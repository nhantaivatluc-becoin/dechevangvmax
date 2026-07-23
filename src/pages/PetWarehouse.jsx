import "./PetWarehouse.css";

const PET_LIST=[
{
name:"🔥 Hỏa Long",
level:10,
power:5000,
star:"⭐⭐⭐"
},
{
name:"🐉 Thần Long",
level:20,
power:15000,
star:"⭐⭐⭐⭐⭐"
},
{
name:"🦁 Sư Tử Vàng",
level:15,
power:9000,
star:"⭐⭐⭐⭐"
}
];


export default function PetWarehouse(){

return(

<div className="pet-warehouse">

<h1>📦 KHO PET</h1>

<div className="pet-grid">

{
PET_LIST.map((pet,index)=>(

<div className="pet-box" key={index}>

<h2>{pet.name}</h2>

<div>{pet.star}</div>

<p>⭐ Cấp độ: {pet.level}</p>

<p>⚔️ Sức mạnh: {pet.power}</p>


<button>
⚔️ Trang bị
</button>


<button>
⬆️ Nâng cấp
</button>


</div>

))
}


</div>

</div>

)

}
