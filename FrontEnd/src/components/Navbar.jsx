import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">3D Model Hub</div>
      <ul className="navbar-links">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Dashboard</Link>
        </li>
        <li className={location.pathname === "/View3DModel" ? "active" : ""}>
          <Link to="/View3DModel">View Models</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
