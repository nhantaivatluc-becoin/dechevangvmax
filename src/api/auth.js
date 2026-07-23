const API = "http://localhost:3000/api";


export async function telegramLogin(user){

    const res = await fetch(
        `${API}/auth/telegram`,
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        }
    );


    return await res.json();

}
