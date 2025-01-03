import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <h2>Restaurant Booking</h2>
      <ul style={styles.navList}>
        <li>
          <NavLink to="/" style={styles.link} activeStyle={styles.activeLink}>
            Check Availability
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/book"
            style={styles.link}
            activeStyle={styles.activeLink}
          >
            Book a Table
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "200px",
    background: "#f4f4f4",
    padding: "20px",
    height: "100%",
  },
  navList: {
    listStyle: "none",
    padding: 0,
  },
  link: {
    textDecoration: "none",
    color: "#333",
    display: "block",
    padding: "10px 0",
  },
  activeLink: {
    fontWeight: "bold",
    color: "#007BFF",
  },
};

export default Sidebar;
