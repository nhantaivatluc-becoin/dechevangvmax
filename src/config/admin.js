export const ADMIN_ACCOUNT={

username:"admin",

password:"11122003"

};


export function checkAdmin(){

return localStorage.getItem("adminLogin")==="true";

}

