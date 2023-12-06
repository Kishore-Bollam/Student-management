import { useForm } from "react-hook-form";
import { UserTimesheetView } from './timesheet-view.component'
import './timesheet.component.css'
import { saveUserTimesheetData } from "../../../services/timesheet/timesheet.service";



export function TimeSheet (){

  // const [success,setSuccess]=useState();
  // const [message,setMessage]=useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  function saveData(data) {
    // alert(JSON.stringify(data));
    saveUserTimesheetData(data).then((res)=>{
    window.location.reload()
    // setSuccess("success")
    // setMessage("Data succesfully saved...!")
   })
   //.catch(()=>{
  //     setSuccess("error")
  //     setMessage("Data Not Saved....!")
  // })
  }
  return(
    <div className="bgColor">
        <h3 className="text-center">PLEASE FILL AND SUBMIT YOUR TTIMESHEET</h3>
        <form
        autoComplete="off"
        className="m-5  bg-color"
        onSubmit={handleSubmit((data) => {
          saveData(data);
        })}
      >
        <div class="form-group">
          <label for="exampleInputEmail1">DATE</label>
          <input
            type="date"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("date", { required: true })}
          />
          {errors.date && (
            <div className="text-danger">please select todays date...!</div>
          )}
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">LOGIN-TIME</label>
          <input
            type="time"
            class="form-control"
            id="exampleInputPassword1"
            {...register("login", { required: true })}
          />
          {errors.login && (
            <div className="text-danger">please select login time...!</div>
          )}
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">SIGNOUT-TIME</label>
          <input
            type="time"
            class="form-control"
            id="exampleInputPassword1"
            {...register("signout", { required: true })}
          />
          {errors.signout && (
            <div className="text-danger">please select signout time...!</div>
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
       <UserTimesheetView></UserTimesheetView>
    </div>
  )
}