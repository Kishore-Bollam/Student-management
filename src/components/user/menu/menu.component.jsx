import { Link } from "react-router-dom";
import './menu.component.css'

export function Menu() {
  return (
    <div className="menu ">
     
      <label htmlFor="">
        <Link to="/" className="menu-item">HOME</Link>
      </label>
      <label htmlFor="">
        <Link to="/components/profile" className="menu-item">PROFILE</Link>
      </label>
      <label>
        <Link to="/components/courses" className="menu-item">COURSES</Link>
      </label>
      <label htmlFor="">
        <Link to="/components/placements" className="menu-item">PLACEMENTS</Link>
      </label>
      <label htmlFor="">
        <Link to="/components/timesheet" className="menu-item">TIMESHEET</Link>
      </label>
      <label htmlFor="">
        <Link to="/components/exams" className="menu-item">EXAMS</Link>
      </label>
     
      <label htmlFor="">
        <Link to="/components/signup">
        <input type="button" value="SIGNUP" className="btn btn-primary "/> 
        </Link>
      </label>
      <label htmlFor="">
        <Link to="/components/login">
        <input type="button" value="LOGIN" className="btn btn-success ms-5 "/> 
        </Link>
      </label>
      <label htmlFor="">
        <Link to="/components/admin/admin-menu">
        <input type="button" value="ADMIN" className="btn btn-danger ms-5 "/> 
        </Link>
      </label>
      
    </div>
  );
}
