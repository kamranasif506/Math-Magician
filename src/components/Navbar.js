import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">

      <Link className="navbar-brand" to="/" style={{ fontSize: '2rem' }}>
        Math Magicians
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      {/* Navbar Items */}
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item border-right">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item  border-right">
            <Link className="nav-link" to="/calculator">
              Calculator
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/quotes">
              Quote
            </Link>
          </li>
          {/* Add more menu items here */}
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
