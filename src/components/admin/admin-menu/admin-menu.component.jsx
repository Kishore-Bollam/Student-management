import { Link } from "react-router-dom"
import './admin-menu.component.css'

export function AdminMenu(){


    return(
        <div className="menu "> 
            <label htmlFor="">
        <Link to="/components/admin/admin-course" className="menu-item">COURSE</Link>
      </label>
      <label htmlFor="">
        <Link to="/components/profile" className="menu-item">BATCH</Link>
      </label>
      <label>
        <Link to="/components/courses" className="menu-item">ATTENDENCE</Link>
      </label>
      <label htmlFor="">
        <Link to="/components/placements" className="menu-item">EXAMS</Link>
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
        </div>
    )
}