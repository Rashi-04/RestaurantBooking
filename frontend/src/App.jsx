import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AvailableSlotsPage from "./components/AvailableSlotsPage";
import BookingFormPage from "./components/BookingFormPage";
import BookingSummaryPage from "./components/BookingSummaryPage";

const App = () => {
  return (
    <div style={styles.container}>
      <Sidebar />
      <div style={styles.content}>
        <Routes>
          <Route path="/" element={<AvailableSlotsPage />} />
          <Route path="/book" element={<BookingFormPage />} />
          <Route path="/summary" element={<BookingSummaryPage />} />
        </Routes>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100vh",
  },
  content: {
    flex: 1,
    padding: "20px",
    overflowY: "auto",
  },
};

export default App;
