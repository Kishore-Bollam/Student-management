import { useEffect, useState } from "react"
import GridComponent from "../../shared/grid/Grid.component"
import { getUserTimesheetData } from "../../../services/timesheet/timesheet.service"

export function UserTimesheetView(){
    const [usertimesheetdata , setUserTimesheetData] = useState()

useEffect(()=>{
    UserTimesheetDetails()
})

    function UserTimesheetDetails(){
        getUserTimesheetData().then((res)=>{
            setUserTimesheetData(res.data)
        })
    }


    const headers = ["ID","DATE" , "LOGIN-TIME","SIGNOUT-TIME","ACTIONS"]

    return(
        <div className="mt-5 pt-5">
        <h3 className="text-center p-3 ">USER-TIMESHEET-DETAILES</h3>
        <GridComponent headers={headers} data={usertimesheetdata}></GridComponent>
      </div>
    )
}