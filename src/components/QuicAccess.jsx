import { Link } from "react-router-dom";

const QuicAccess = ({ data }) => {
  const { _id, reviews, image } = data;
  return (
    <div>
      <Link to={`/book/${_id}`}>
        <div>
          <img className="h-20 w-40 rounded-lg" src={image} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default QuicAccess;
