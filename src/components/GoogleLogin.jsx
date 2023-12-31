import { signInWithPopup } from "firebase/auth";
import { auth, googleAuth } from "../firebase/firebase.config.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);

      await signInWithPopup(auth, googleAuth);
      console.log("login with google");
      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const buttonLabel = loading ? "Please Wait" : "Google";

  return (
    <div>
      <button
        disabled={loading}
        onClick={handleGoogleSignIn}
        className="btn btn-primary bg-gradient-to-l from-[#9370DB] to-[#ffc0cb] hover:bg-white hover:text-[#4B0082] w-full"
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default GoogleLogin;
