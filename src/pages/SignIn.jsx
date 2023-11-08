import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase.config";

import img from "../assets/login.webp";
import GoogleLogin from "../components/GoogleLogin";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

const SignIn = () => {
  const [signInError, setSignInError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const handleLogIn = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    try {
      await signInWithEmailAndPassword(auth, email, password);

      console.log("User signed in");

      toast.success("user signed in successfully");

      // const user = { email };
      // axios
      //   .post("https://assignment-11-server-71xezmt7g-tanvirs-projects.vercel.app/jwt", user, {
      //     withCredentials: true,
      //   })
      //   .then((res) => {
      //     console.log(res.data);
      //   });
      navigate(location?.state ? location?.state : "/");
    } catch (error) {
      console.error("Error signing in", error.message);
      setSignInError(error.message);
      toast.error(`Error signing in: ${error.message}`);
    }
  };
  return (
    <div className=" ">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" mr-16 w-1/2 bg-transparent">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-transparent">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary bg-gradient-to-r from-[#9370DB] to-[#ffc0cb] hover:bg-white hover:text-[#4B0082]"
                  type="submit"
                  value="Login"
                />
              </div>
              <GoogleLogin></GoogleLogin>
            </form>
            <p className="text-center">
              New to Car doctor ?{" "}
              <Link className="text-[#4B0082] font-bold" to="/sign_up">
                Sign Up
              </Link>{" "}
            </p>
            {signInError && (
              <p className="text-center text-error">{signInError}</p>
            )}
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={5000} />
    </div>
  );
};

export default SignIn;
