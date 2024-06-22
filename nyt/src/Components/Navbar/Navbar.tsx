import React from "react";
import "./Navbar.css"; // Import the CSS file for Navbar styles
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/New_york_times_logo_PNG7.png" alt="Logo" />
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/Most-Popular-Articles">Most Popular Articles</Link>
        </li>
        <li className="navbar-item">
          <Link to="/books">Books</Link>
        </li>
        <li className="navbar-item">
          <Link to="/reviews">Reviews</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
