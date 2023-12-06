import { useEffect, useState } from "react"
import { getUserLoginData } from "../../../services/user-login/user-login.service"
import GridComponent from "../../shared/grid/Grid.component"



export const Profile = () =>{
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
        <div>
            <h1 className="text-center">USER-LOGIN DETAILES</h1>
            <GridComponent headers={headers} data={userlogindata}></GridComponent>

        </div>
    )
}