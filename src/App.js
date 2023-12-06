import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Menu } from "./components/user/menu/menu.component";
import { AppRouter } from "./app.router";
import UseState from "./practice/useState";
// import { Pracice } from "./practice/practice";

function App() {

  return (
    <div className="bg">
      <BrowserRouter>
        <div className="row menu">
          <div className="col-2 text-white p-3 "> VKC-LOGO </div>
          <div className="col-10">
            <Menu></Menu>{" "}
          </div>
        </div>
        <AppRouter></AppRouter>
      </BrowserRouter>

      {/* <Pracice></Pracice> */}
      <UseState></UseState>
    </div>
  );
}

export default App;
