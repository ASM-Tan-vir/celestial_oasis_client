import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import SignOutBtn from "../components/SignOutBtn";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
  const { user } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <Link
          className="bg-white hover:bg-slate-50 text-[#4B0082] font-semibold mr-2"
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="bg-white hover:bg-slate-50 text-[#4B0082] font-semibold mr-2"
          to="/rooms"
        >
          Rooms
        </Link>
      </li>
      {user?.email && (
        <li>
          <Link
            className="bg-white hover:bg-slate-50 text-[#4B0082] font-semibold mr-2"
            to="/my_bookings"
          >
            Bookings
          </Link>
        </li>
      )}

      <li>
        <Link
          className="bg-white hover:bg-slate-50 text-[#4B0082] font-semibold mr-2"
          to="/about"
        >
          About Us
        </Link>
      </li>

      <li>
        <Link
          className="bg-white hover:bg-slate-50 text-[#4B0082] font-semibold mr-2"
          to="/sign_in"
        >
          Sign In
        </Link>
      </li>
      <li>
        <Link
          className="bg-white hover:bg-slate-50 text-[#4B0082] font-semibold mr-2"
          to="/sign_up"
        >
          SignUp
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar  bg-transparent  rounded-md">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content  z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link className="   text-xl" to="/">
          <img className="w-full h-20" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <SignOutBtn />
        ) : (
          <Link
            className="btn btn-ghost bg-white hover:bg-slate-50"
            to="/sign_in"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
