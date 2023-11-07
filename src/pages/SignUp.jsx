import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import NavBar from "../shared/NavBar";
import img from "../assets/login.webp";
import GoogleLogin from "../components/GoogleLogin";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [authError, setAuthError] = useState("");
  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const password = form.get("password");
    const email = form.get("email");
    try {
      if (!/^.{6,}$/.test(password)) {
        setAuthError("Password must be 6 characters");
        return;
      }

      if (!/.*[A-Z].*/.test(password)) {
        setAuthError("Password must have 1 capital letter");
        return;
      }

      if (!/.*[!@#$%^&*()_+{}[\]:;<>,.?~\\|\-=].*/.test(password)) {
        setAuthError("Password must have 1 special character");
        return;
      }
      await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, {
        displayName: name,
      });
      console.log("User created");
      navigate("/");
      toast.success("User created");
    } catch (error) {
      console.error("Error creating user", error.message);
      setAuthError(error.message);
      toast.error(error.message);
    }
  };
  return (
    <div>
      {/* <NavBar></NavBar> */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" mr-16 w-1/2">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Confirm password"
                  className="input input-bordered"
                  required
                />
              </div>
              {authError ? (
                <p className="text-sm text-red-500">{authError}</p>
              ) : null}
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary bg-gradient-to-r from-[#9370DB] to-[#ffc0cb] hover:bg-white hover:text-[#4B0082]"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <GoogleLogin></GoogleLogin>
            </form>
            <p className="text-center">
              Already have an account ?{" "}
              <Link className="text-[#4B0082] font-bold" to="/sign_in">
                Log in
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={5000} />
    </div>
  );
};

export default SignUp;
