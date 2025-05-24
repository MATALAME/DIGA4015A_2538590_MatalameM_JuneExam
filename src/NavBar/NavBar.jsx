import React from "react";
import { Link } from "react-router-dom";
import './NavBarStyle.css'

import logo from "../Images/RawGamesLogo.png"

function NavBar (){
    return(
    <nav>
        <div className="NavBar"> 
        <img src={logo} alt="Raw Games" />
        {/* <Link to="/">Landing</Link> */}
        <Link to="/home">Home</Link>
        <Link to="signup">Sign Up</Link> 
        <Link to="/games">Games</Link>
        <Link to="/deals">Deals</Link>
        </div>
    </nav>
    )
}

export default NavBar; 