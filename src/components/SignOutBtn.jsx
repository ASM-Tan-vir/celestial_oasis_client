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
      className=" px-4 rounded-lg h-10 bg-white hover:bg-slate-50 text-[#4B0082] font-semibold"
      onClick={handleSignOut}
    >
      sign Out
    </button>
  );
};

export default SignOutBtn;
