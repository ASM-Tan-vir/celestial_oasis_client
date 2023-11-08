import axios from "axios";
import BookingRow from "../components/BookingRow";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `https://assignment-11-server-71xezmt7g-tanvirs-projects.vercel.app/bookings?email=${user?.email}`;

  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setBookings(res.data);
    });
  }, [url]);

  const handleDelete = async (id) => {
    const proceed = window.confirm(
      "Are you sure you want to delete this booking?"
    );

    if (!proceed) {
      return; // User canceled deletion
    }

    try {
      const response = await fetch(
        `https://assignment-11-server-71xezmt7g-tanvirs-projects.vercel.app/bookings/${id}`,
        {
          method: "DELETE",
        }
      );

      toast.success("delate success.");

      console.log("Response:", response);

      // rest of the code...
    } catch (error) {
      console.error("Error deleting booking", error.message);
      toast.error(
        "An error occurred while deleting the booking. Please try again."
      );
    }
  };

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
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
              ></BookingRow>
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
      <ToastContainer position="bottom-right" autoClose={5000} />
    </div>
  );
};

export default MyBookings;
