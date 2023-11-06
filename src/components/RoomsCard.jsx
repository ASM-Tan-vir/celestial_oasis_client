import { Link } from "react-router-dom";

const roomsCard = ({ room }) => {
  const { price_per_night, image, room_type, _id } = room;
  return (
    <Link to={`/rooms_details/${_id}`}>
      <div className="card w-72 h-80 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{room_type}</h2>
          <p>price: ${price_per_night}</p>
        </div>
        <figure>
          <img className="h-44 w-72" src={image} alt="" />
        </figure>
      </div>
    </Link>
  );
};

export default roomsCard;
