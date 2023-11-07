import { Link, useLoaderData } from "react-router-dom";

const RoomsDetails = () => {
  const rooms = useLoaderData();

  const {
    _id,
    description,
    image,
    room_type,
    price_per_night,
    room_size,
    availability,
    room_images,
    special_offers,
    reviews,
  } = rooms;
  return (
    <div className="">
      <div className="flex justify-between p-2  border-2 mx-10 lg:mx-20 my-4 rounded-lg lg:text-2xl font-semibold text-[#4B0082] bg-white shadow-xl">
        <div>
          <h2>Room Type:- {room_type}</h2>
        </div>
        <div>
          <h2>price:- {price_per_night}$</h2>
        </div>
        <div>
          {" "}
          <h2>Room Size:-{room_size}</h2>
        </div>
      </div>
      <div className="text-center text-xl font-semibold mb-4 text-[#4B0082]">
        <p>{description}</p>
      </div>
      <div>
        <img
          className="mx-auto w-full px-10 lg:px-20 h-[10rem] lg:h-[20rem] "
          src={image}
          alt=""
        />
      </div>

      <div className="md:flex  items-center gap-5 mx-10 lg:mx-20 pt-4">
        <div className="w-3/4 flex flex-col justify-center mx-auto  ">
          <h2 className="text-center text-2xl font-semibold text-[#4B0082] mb-4">
            Rooms Preview
          </h2>
          <div className="carousel ">
            <div id="item1" className="carousel-item w-full">
              <img src={room_images[0]} className="w-full h-[50vh]" />
            </div>
            <div id="item2" className="carousel-item w-full">
              <img src={room_images[1]} className="w-full h-[50vh]" />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img src={room_images[2]} className="w-full h-[50vh]" />
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
          </div>
        </div>
        <div className="border p-4 rounded-lg bg-white  h-[60vh]">
          <h2 className="text-center text-lg text-[#4B0082] font-semibold  border-b-2">
            Users Reviews
          </h2>
          <div className="border-2 mt-2 px-4 py-2 rounded-lg">
            <div>
              <h2>Users Name:- {reviews[0].user}</h2>
            </div>
            <div>
              <h2> Ratings:- {reviews[0].rating}</h2>
            </div>
            <div>
              <h2>Comment:- {reviews[0].comment}</h2>
            </div>
          </div>
          <div className="border-2 mt-2 px-4 py-2 rounded-lg">
            <div>
              <h2>Users Name:- {reviews[1].user}</h2>
            </div>
            <div>
              <h2>Ratings:- {reviews[1].rating}</h2>
            </div>
            <div>
              <h2>Comment:- {reviews[1].comment}</h2>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="lg:flex  justify-center gap-10 mx-[20%] items-center">
          <div className="border-2 px-10 py-4 my-4 rounded-lg bg-gradient-to-l from-[#ffc0cb] to-[#9370DB] hover:bg-white hover:text-[#4B0082]">
            <h2>Special Offers</h2>
            <h2>Offer Name:- {special_offers[0].offer_title}</h2>
            <h2> Discount:- {special_offers[0].discount_percentage}</h2>
            <h2>Valid Until:-{special_offers[0].valid_until}</h2>
          </div>
          <div>
            <div className="border-2 px-10 py-4 rounded-lg  flex bg-gradient-to-l from-[#9370DB] to-[#ffc0cb] hover:bg-white hover:text-[#4B0082]">
              <h2>Availability:--</h2>
              {availability ? <h2>available</h2> : <h2>unavailable</h2>}
            </div>
            <div>
              <Link to={`/book/${_id}`}>
                <button className="btn btn-block bg-gradient-to-l from-[#9370DB] to-[#ffc0cb] hover:bg-white hover:text-[#4B0082] mt-2">
                  Book Room
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomsDetails;
