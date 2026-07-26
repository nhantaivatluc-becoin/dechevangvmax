export const adminBank={

bank:"BIDV",

account:"8830541999",

owner:"NGUYEN NGOC ANH"

};


export function createDepositContent(type,id){

return `NAP ${type}${id} USER${Math.floor(10000+Math.random()*90000)}`;

}
