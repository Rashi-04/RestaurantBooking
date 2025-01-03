import React, { useState } from "react";
import axios from "axios";

const AvailableSlots = ({ date }) => {
  const [slots, setSlots] = useState([]);

  const fetchSlots = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/bookings?date=${date}`
      );
      setSlots(response.data);
    } catch (error) {
      console.error("Error fetching slots:", error);
    }
  };

  return (
    <div>
      <button onClick={fetchSlots}>Check Availability</button>
      <ul>
        {slots.map((slot, index) => (
          <li key={index}>
            {slot.time} - {slot.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableSlots;
