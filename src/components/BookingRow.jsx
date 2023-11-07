const BookingRow = ({ booking }) => {
  const { image, customerName, email, services, date, price } = booking;
  return (
    <tr className=" ">
      <th>
        <button className="btn btn-ghost btn-xs">Cancel</button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} />
            </div>
          </div>
          <div>
            <div className="font-bold">{services}</div>
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>{customerName}</td>
      <td>{date}</td>
      <td>{price}$</td>
      <th>
        <button className="btn btn-ghost btn-xs">Update</button>
      </th>
    </tr>
  );
};

export default BookingRow;
