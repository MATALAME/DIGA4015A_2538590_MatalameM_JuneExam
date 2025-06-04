import React from 'react'
import "./FooterComp.css";

import youtube from "../Images/Youtube.png";
import facebook from "../Images/Facebook.png";
import instagram from "../Images/Instagram.png";

function FooterComp() {
  return (
    <div>
      <footer className="app-footer">
            <img src={youtube} alt="Youtube Icon" className="social-media-icon" onClick={() => window.open("https://www.youtube.com/@T5G", "_blank")}/>
            <img src={facebook} alt="Facebook Icon" className="social-media-icon" onClick={() => window.open("https://www.facebook.com/ign/", "_blank")} />
            <img src={instagram} alt="Instagram Icon" className="social-media-icon" onClick={() => window.open("https://www.instagram.com/matalame_/", "_blank")} />
        </footer>
      
            <p className="copyright"> © 2025 Raw Games. All rights reserved. </p>
    </div>
  )
}

export default FooterComp
