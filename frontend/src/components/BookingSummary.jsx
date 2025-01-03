import React from "react";

const BookingSummary = ({ details }) => {
  if (!details) return null;

  return (
    <div style={styles.container}>
      <h2>Booking Confirmed!</h2>
      <p>
        <strong>Date:</strong> {details.date}
      </p>
      <p>
        <strong>Time:</strong> {details.time}
      </p>
      <p>
        <strong>Guests:</strong> {details.guests}
      </p>
      <p>
        <strong>Name:</strong> {details.name}
      </p>
      <p>
        <strong>Contact:</strong> {details.contact}
      </p>
      <p>
        Thank you for choosing our restaurant! We look forward to serving you.
      </p>
    </div>
  );
};

const styles = {
  container: {
    marginTop: "20px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
};

export default BookingSummary;
