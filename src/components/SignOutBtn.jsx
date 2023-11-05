import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase.config";

const SignOutBtn = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/");
    window.location.reload();
  };
  return (
    <button
      className="btn  bg-white hover:bg-slate-50 text-[#E17509]"
      onClick={handleSignOut}
    >
      sign Out
    </button>
  );
};

export default SignOutBtn;
