// import React from "react";
import "./navbar.css";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/home" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/books" className="nav-link">
            Books
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/addbook" className="nav-link">
            Add-Book
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}
