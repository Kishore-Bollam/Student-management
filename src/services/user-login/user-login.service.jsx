
import { getData, saveData } from "../context.service";

 const url="http://localhost:3000/user-login";

export function getUserLoginData(){
  return getData(url)
}

export function saveUserLoginData(data){
    return saveData(url,data)
}