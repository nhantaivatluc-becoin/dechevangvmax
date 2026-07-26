export const ADMIN_IDS=[

"8454844333"

];



export function isAdmin(id){


return ADMIN_IDS.includes(

String(id)

);


}
