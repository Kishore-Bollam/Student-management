
import { getData, saveData } from "../context.service";

 const url="http://localhost:3000/timesheet/";

export function getUserTimesheetData(){
  return getData(url)
}

export function saveUserTimesheetData(data){
    return saveData(url,data)
}