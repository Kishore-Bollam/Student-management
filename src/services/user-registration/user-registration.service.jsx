
import { getData, saveData } from "../context.service";

 const url="  http://localhost:3000/user-Registration/";

export function getUserRegistrationData(){
  return getData(url)
}

export function saveUserRegistrationData(data){
    return saveData(url,data)
}