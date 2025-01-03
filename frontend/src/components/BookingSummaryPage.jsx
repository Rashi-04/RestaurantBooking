import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BookingSummaryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { bookingDetails } = location.state || {};

  if (!bookingDetails) {
    // If no booking details are available, redirect to the booking form
    navigate("/book");
    return null;
  }

  return (
    <div style={styles.container}>
      <h2>Booking Summary</h2>
      <p>
        <strong>Name:</strong> {bookingDetails.name}
      </p>
      <p>
        <strong>Contact:</strong> {bookingDetails.contact}
      </p>
      <p>
        <strong>Date:</strong> {bookingDetails.date}
      </p>
      <p>
        <strong>Time:</strong> {bookingDetails.time}
      </p>
      <p>
        <strong>Guests:</strong> {bookingDetails.guests}
      </p>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
};

export default BookingSummaryPage;
