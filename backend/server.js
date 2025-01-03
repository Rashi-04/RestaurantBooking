const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const bookings = []; // In-memory storage for bookings

// Create Booking
app.post("/api/bookings", (req, res) => {
  const { date, time, guests, name, contact } = req.body;
  const isBooked = bookings.find((b) => b.date === date && b.time === time);

  if (isBooked) {
    return res.status(400).json({ error: "Slot already booked" });
  }

  const booking = { date, time, guests, name, contact };
  bookings.push(booking);
  res.status(201).json(booking);
});

// Get Bookings
app.get("/api/bookings", (req, res) => {
  const { date } = req.query;
  const availableSlots = bookings.filter((b) => b.date === date);
  res.json(availableSlots);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
