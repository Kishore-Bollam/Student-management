import { useEffect, useState } from "react"
import { getUserLoginData } from "../../../services/user-login/user-login.service"
import GridComponent from "../../shared/grid/Grid.component"

export function UserView(){
    const [userlogindata , setUserLoginData] = useState()

useEffect(()=>{
    UserLoginDetails()
})

    function UserLoginDetails(){
        getUserLoginData().then((res)=>{
            setUserLoginData(res.data)
        })
    }


    const headers = ["ID","EMAIL" , "PASSWORD","ACTIONS"]

    return(
        <div className="mt-5 pt-5">
        <h3 className="text-center p-3 ">USER-REGISTRATION-DETAILES</h3>
        <GridComponent headers={headers} data={userlogindata}></GridComponent>
      </div>
    )
}