import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const QuicAccess = ({ data }) => {
  const { _id, image } = data;

  // Define the animation
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 }, // Adjust the duration as needed
  });

  return (
    <div>
      <Link to={`/book/${_id}`}>
        <animated.div style={fadeIn}>
          <img className="h-20 w-40 rounded-lg" src={image} alt="" />
        </animated.div>
      </Link>
    </div>
  );
};

export default QuicAccess;
