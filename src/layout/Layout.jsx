import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";

const Layout = () => {
  return (
    <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#9370DB] to-[#ffc0cb]">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
