import React, { useState } from "react";
import CalendarView from "../components/CalendarView";

const AvailableSlotsPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h2>Available Slots</h2>
      <CalendarView onDateChange={handleDateChange} />
      <p>Selected Date: {selectedDate.toDateString()}</p>
    </div>
  );
};

export default AvailableSlotsPage;
