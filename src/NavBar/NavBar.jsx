import React from "react";
import { Link } from "react-router-dom";

function NavBar (){
    return(
    <nav>
        {/* <Link to="/">Landing</Link> */}
        <Link to="signup">Sign Up</Link> 
        <Link to="/home">Home</Link>
        <Link to="/deals">Deals</Link>
    </nav>
    )
}

export default NavBar; 