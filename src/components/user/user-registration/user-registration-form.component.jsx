import {useForm} from 'react-hook-form';
import { UserRegistrationView } from './user-registration-view.component';
import { saveUserRegistrationData } from '../../../services/user-registration/user-registration.service';
import './user-registration-form.component.css'
import { useState } from 'react';
import { NotificationMessage } from '../../common/notification-message/notification-message.component';


export function UserRegistrationForm(){
    const [success,setSuccess]=useState();
    const [message,setMessage]=useState();
    const {
        register,
        handleSubmit,
        formState:{errors}
    }=useForm();

    const saveData=(data)=>{
        saveUserRegistrationData(data).then((res)=>{
            window.location.reload()
            // alert(JSON.stringify(res.data))
            setSuccess("success")
            setMessage("Data succesfully saved...!")
        })
        .catch(()=>{
            setSuccess("error")
            setMessage("Data Not Saved....!")
        })
    }
    return(
        <>
        <div className='p-3 mt-5'> 
        <div className="ms-3 me-3 bg-colo p-3">
        <h3 className='text-center'>USER REGISTRATION FORM</h3>
            <form onSubmit={handleSubmit((data)=>{saveData(data)})}>
                
            <div className="form-group ">
                <label className="form-label">User Name</label>
                <input type="text"placeholder="Enter your name..." {...register("Name",{required:true})}className="form-control"></input>
            </div>
            {errors.Name &&<div className='text-danger'>Name is mandatary</div>}
            <div className="form-group">
                <label>Email</label>
                <input type="Email"placeholder="Enter your Email.." {...register("Email",{required:true})} className="form-control"></input>
            </div>
           {errors.Email &&<div className='text-danger'>Email is mandatary</div>}
            <div className="form-group">
                <label>Phone Number</label>
                <input type="number" className="form-control" {...register("PhoneNumber",{required:true})}></input>
            </div>
            {errors.PhoneNumber &&<div className='text-danger'>Phone number is mandatary</div>}
            <label>Gender</label>
            <div className="form-group">
                
                <label>Male</label>&nbsp;
                <input type="radio" name="gender" {...register("Gender",{required:true})}></input> &nbsp; &nbsp;
                <label>Female</label>&nbsp;
                <input type="radio" name="gender" {...register("Gender",{required:true})}></input>
            </div>
           {errors.Gender &&<div className='text-danger'>Gender is mandatary</div>}
            <div className="form-group">
                <label>Date Of Birth</label>
                <input type="date" className="form-control" {...register("DateofBirth",{required:true})}></input>
            </div>
            {errors.DateofBirth &&<div className='text-danger'>Date of Birth is Mandatary</div>}
            <div className="form-group">
                <label>Address</label>
                <textarea row={5} className="form-control" {...register("Address",{required:true})}>
                </textarea>
            </div>
            {errors.Address &&<div className='text-danger'>Address is mandatary</div>}
            <div className="m-3">
                <input type="submit"value="Register" className="btn btn-primary me-2"></input>
                <input type="reset"value="Cancel" className="btn btn-danger"></input>
            </div>
            </form>
            </div>
            <NotificationMessage type={success}message={message}></NotificationMessage>
            <UserRegistrationView></UserRegistrationView>    

        </div>
        </>
        
    )
}