import { useLoaderData } from "react-router-dom";
import BookingRow from "../components/BookingRow";

const MyBookings = () => {
  const bookings = useLoaderData();

  return (
    <div>
      <h2>bookings:- {bookings.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label></label>
              </th>
              <th>Service Name</th>
              <th>Email</th>
              <th>Customer Name</th>
              <th>Date</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookings.map((booking) => (
              <BookingRow key={booking._id} booking={booking}></BookingRow>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th>
                <label></label>
              </th>
              <th>Service Name</th>
              <th>Email</th>
              <th>Customer Name</th>
              <th>Date</th>
              <th>Price</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
