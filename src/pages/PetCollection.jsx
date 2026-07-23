import "./PetCollection.css";


export default function PetCollection(){


const pets=

JSON.parse(localStorage.getItem("pets")) || [];



let bonus=pets.length*5;



return(

<div className="collection-page">


<h1>

📚 BỘ SƯU TẬP PET

</h1>



<h2>

🐾 Đã sở hữu:

{pets.length}

Pet

</h2>



<h2>

🎁 Bonus đào vàng:

+{bonus}%

</h2>



{

pets.map((p,i)=>(


<div className="collection-card" key={i}>


<h2>

{p.icon} {p.name}

</h2>


<p>

⭐ Sao:

{p.star||1}

</p>


<p>

🎨 Skin:

{p.skin||"Mặc định"}

</p>


</div>


))


}



</div>

)

}
