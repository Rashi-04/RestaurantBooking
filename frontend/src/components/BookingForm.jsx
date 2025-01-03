import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    date: "",
    time: "",
    guests: 1,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/bookings",
        formData
      );
      alert("Booking Successful!");

      // Navigate to the Booking Summary page with booking details
      navigate("/summary", { state: { bookingDetails: formData } });
    } catch (error) {
      console.error("Error booking table:", error);
      alert("Failed to book the table. Try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book a Table</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Contact:
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Time:
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Guests:
        <input
          type="number"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          min="1"
          required
        />
      </label>
      <button type="submit">Book Table</button>
    </form>
  );
};

export default BookingForm;
