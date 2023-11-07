import moment from "moment/moment";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLoaderData } from "react-router-dom";

const Book = () => {
  const bookingData = useLoaderData();
  const { room_type, price_per_night, image, room_id } = bookingData;
  const { user } = useContext(AuthContext);
  const currentDate = moment().format(" Do MMM YY");

  const handleBooking = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;
    const booking = {
      customerName: name,
      email,
      date,
      services: room_type,
      service_id: room_id,
      img_url: image,
      price: price_per_night,
    };

    console.log(booking);

    fetch("http://localhost:5000/bookings", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h2 className="text-center text-2xl font-semibold text-[#271845] ">
        CheckOut:{room_type}{" "}
      </h2>
      <div className="w-full">
        <form className="card-body" onSubmit={handleBooking}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control">
              <label htmlFor="name" className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                defaultValue={user?.displayName || ""}
                id="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                defaultValue={user?.email || ""}
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="date" className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="input input-bordered"
                defaultValue={currentDate}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="price" className="label">
                <span className="label-text">Price Per Night</span>
              </label>
              <input
                type="text"
                name="price"
                placeholder={"$" + price_per_night}
                id="price"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-block  bg-gradient-to-l from-[#9370DB] to-[#ffc0cb] hover:bg-white hover:text-[#4B0082]"
              type="submit"
              value="Booking Confirm"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Book;
