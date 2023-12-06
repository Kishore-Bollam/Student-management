import { Route, Routes } from "react-router-dom";
import { Home } from "./components/user/home/home.component";
import { Profile } from "./components/user/profile/profile.component";
import { Courses } from "./components/user/courses/courses.component";
import { Placement } from "./components/user/placements/placement.component";
import { TimeSheet } from "./components/user/timesheet/timesheet-form.component";
import { Exams } from "./components/user/exams/exams.component";
import UserLogin from "./components/user/user-login/user-login-form.component";
import { UserRegistrationForm } from "./components/user/user-registration/user-registration-form.component";
import { AdminMenu } from "./components/admin/admin-menu/admin-menu.component";
import { Course } from "./components/admin/courses/admin.courses.component";

export function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/components/profile" element={<Profile></Profile>}></Route>
        <Route path="/components/courses" element={<Courses></Courses>}></Route>
        <Route
          path="/components/placements"
          element={<Placement></Placement>}
        ></Route>
        <Route
          path="/components/timesheet"
          element={<TimeSheet></TimeSheet>}
        ></Route>
        <Route path="/components/exams" element={<Exams></Exams>}></Route>
        <Route path="/components/admin/admin-menu" element={<AdminMenu></AdminMenu>}></Route>
        <Route path="/components/admin/admin-course" element={<Course></Course>}></Route>

        <Route
          path="/components/signup"
          element={<UserRegistrationForm></UserRegistrationForm>}
        ></Route>
        <Route
          path="/components/login"
          element={<UserLogin></UserLogin>}
        ></Route>
      </Routes>
    </div>
  );
}
