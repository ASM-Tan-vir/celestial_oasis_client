import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar";

const Layout = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
