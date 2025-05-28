import React from "react";
import { NavLink } from "react-router-dom";
import './NavBarStyle.css';

import logo from "../Images/RawGamesLogoWhite.png";

function NavBar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="Raw Games" className="navbar-logo" />
            <div className="nav-links-container">
                <NavLink to="/home" className="nav-link">Home</NavLink>
                <NavLink to="/games" className="nav-link">Games</NavLink>
                <NavLink to="/deals" className="nav-link">Deals</NavLink>
                <NavLink to="/profile" className="nav-link">Profile</NavLink>
                <div className="nav-highlight"></div>
            </div>
        </nav>
    );
}

export default NavBar;
