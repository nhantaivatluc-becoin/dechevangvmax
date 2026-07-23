import "./PetFarm.css";

const PETS=[
{
name:"🔥 Hỏa Long",
level:10,
power:5000,
status:"Đang nuôi"
},
{
name:"🐉 Thần Long",
level:20,
power:15000,
status:"Sẵn sàng chiến đấu"
},
{
name:"🦁 Sư Tử Vàng",
level:15,
power:9000,
status:"Đang nghỉ"
}
];


export default function PetFarm(){

return(

<div className="pet-farm">

<h1>🐾 FARM PET</h1>

<p>
Nuôi pet để tăng sức mạnh chiến binh
</p>


<div className="farm-grid">

{
PETS.map((pet,index)=>(

<div className="farm-card" key={index}>

<h2>{pet.name}</h2>

<p>⭐ Level: {pet.level}</p>

<p>⚔️ Power: {pet.power}</p>

<p>📌 {pet.status}</p>


<button>
🍖 Cho ăn
</button>


<button>
⬆️ Tăng cấp
</button>


</div>

))
}

</div>

</div>

)

}
