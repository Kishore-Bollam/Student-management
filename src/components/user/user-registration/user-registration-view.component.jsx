import { useEffect, useState } from "react";
import { getUserRegistrationData } from "../../../services/user-registration/user-registration.service";
import GridComponent from "../../shared/grid/Grid.component";
import { NotificationMessage } from "../../common/notification-message/notification-message.component";

export function UserRegistrationView() {
    const [success,setSuccess]=useState();
    const [message,setMessage]=useState();
   
  const header = [
    "ID",
    "NAME",
    "EMAIL",
    "PHONE NO",
    "GENDER" ,
    "DOB",
    "ADDRESS",
    "ACTIONS",
  ];
  const [registrationData, setRegistrationData] = useState();
  useEffect(() => {
    getRegistrationDetails();
  }, []);
  function getRegistrationDetails() {
    getUserRegistrationData().then((res) => {
        setRegistrationData(res.data);
    
    }).catch(()=>{
        setSuccess("error")
        setMessage("network error contact admin")
    })
  }
  
  return (
    <div className="mt-5 pt-5">
      <h3 className="text-center p-3 ">USER-REGISTRATION-DETAILES</h3>
      <GridComponent headers={header} data={registrationData}></GridComponent>
      <NotificationMessage type={success}message={message}></NotificationMessage>

    </div>
  );
}
