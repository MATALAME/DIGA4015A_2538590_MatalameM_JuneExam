import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import './NavBarStyle.css';
import logo from "../Images/RawGamesLogoWhite.png";
import { useInfo } from "../SignUp/UserContext";

import hamburger from "../Images/Hamburger.png";
import user from "../Images/UserIcon.png";

function NavBar() {
  const navigate = useNavigate(); 
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hideNavbarPaths = ['/', '/signup'];
  const { userData } = useInfo();


  if (hideNavbarPaths.includes(location.pathname.toLowerCase())) { // Doesn't render the nav bar if the app is on one these paths
    return null;
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <img src={logo} alt="Raw Games Logo" className="navbar-logo" />
      <img src={hamburger} alt = "Hamburger Menu Logo" className="hamburger" onClick={toggleMenu}/>  

      <div className={`nav-links-container ${isMenuOpen ? 'show' : ''}`}>
        <NavLink to="/home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
        <NavLink to="/games" className="nav-link" onClick={() => setIsMenuOpen(false)}>Games</NavLink>
        <NavLink to="/deals" className="nav-link" onClick={() => setIsMenuOpen(false)}>Deals</NavLink>
        <NavLink to="/profile" className="nav-link" onClick={() => setIsMenuOpen(false)}>Profile</NavLink>
      </div>

       <div className='nav-user-display'> 
            <img src={user} onClick={() => navigate('/profile')} alt="User Icon" className='nav-user-icon' />
            <p><strong>{userData.name}</strong></p>
        </div>
    </nav>
  );
}

export default NavBar;
