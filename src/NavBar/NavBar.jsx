import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import './NavBarStyle.css';
import logo from "../Images/RawGamesLogoWhite.png";

function NavBar() {
  const location = useLocation();
  const hideNavbarPaths = ['/', '/signup'];

  if (hideNavbarPaths.includes(location.pathname.toLowerCase())) { // Doesn't render the nav bar if the app is on one these paths
    return null;
  }

  return (
    <nav className="navbar">
      <img src={logo} alt="Raw Games" className="navbar-logo" />
      <div className="nav-links-container">
        <NavLink to="/home" className="nav-link">Home</NavLink>
        <NavLink to="/games" className="nav-link">Games</NavLink>
        <NavLink to="/deals" className="nav-link">Deals</NavLink>
        <NavLink to="/profile" className="nav-link">Profile</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
