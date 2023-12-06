import { useForm } from "react-hook-form";
import './user-login-form.component.css'
// import { UserView } from "./user-login-view.component";
import { saveUserLoginData } from "../../../services/user-login/user-login.service";
import { useState } from "react";
import { NotificationMessage } from "../../common/notification-message/notification-message.component";

const UserLogin = () => {
  const [success,setSuccess]=useState();
    const [message,setMessage]=useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function saveData(data) {
    // alert(JSON.stringify(data));
    saveUserLoginData(data).then((res)=>{
    window.location.reload()
    setSuccess("success")
    setMessage("Data succesfully saved...!")
    }).catch(()=>{
      setSuccess("error")
      setMessage("Data Not Saved....!")
  })
  }
  return (
    <div>
      <h3 className="text-center ">LOGIN BY REACT HOOK FORM</h3>
      <form
        autoComplete="off"
        className="m-5  bg-color"
        onSubmit={handleSubmit((data) => {
          saveData(data);
        })}
      >
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            {...register("username", { required: true })}
          />
          {errors.username && (
            <div className="text-danger">User Name is Required...!</div>
          )}
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <div className="text-danger">password is Required...!</div>
          )}
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <NotificationMessage  type={success} message={message} ></NotificationMessage>
      {/* <UserView></UserView> */}
    </div>
  );
};
export default UserLogin;
