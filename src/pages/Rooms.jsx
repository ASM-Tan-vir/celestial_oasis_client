import { useLoaderData } from "react-router-dom";

import RoomsCard from "../components/RoomsCard";

const Rooms = () => {
  const rooms = useLoaderData();

  return (
    <div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center">
          {rooms.map((room) => (
            <RoomsCard key={room.room_id} room={room}></RoomsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
