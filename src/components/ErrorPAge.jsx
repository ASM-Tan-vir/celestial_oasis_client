import { Link } from "react-router-dom";
import errorImg from "../assets/404_page_cover.jpg";

const ErrorPAge = () => {
  return (
    <div>
      <div
        className="h-[100vh] w-[100vw] justify-center items-center flex
      "
      >
        <img src={errorImg} alt="" />
        <Link to="/">
          <button className="btn btn-block">back to home </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPAge;
