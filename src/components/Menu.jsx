export default function Menu({openPage}){


return(

<div className="bottom-menu">


<button onClick={()=>openPage("Home")}>
🏠
</button>


<button onClick={()=>openPage("Battle")}>
⚔️
</button>


<button onClick={()=>openPage("PetWarehouse")}>
🐾
</button>


<button onClick={()=>openPage("Guild")}>
🏰
</button>


<button onClick={()=>openPage("Vip")}>
👑
</button>


<button onClick={()=>openPage("Wallet")}>
💰
</button>


</div>

)

}
