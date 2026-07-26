import api from "./api";

export async function checkServer(){
  return await api("/status");
}

export async function getSmmServices(){
  return await api("/smm/services");
}
