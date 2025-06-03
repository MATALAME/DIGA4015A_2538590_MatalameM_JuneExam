import React from 'react';
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

import icon from "../Images/PlayIcon.png"
import gamepad from "../Images/Gamepad.png"
import controller from "../Images/Controller.png"

function LandingPage() {
  const navigate = useNavigate();

  function handleSignUpLogin() {
    navigate("/Signup");
    //console.log('Navigate to Sign-Up/Login');
  }

  function handleSkip() {
    navigate ("/Home");
    //console.log("Proceed without signing up");

  }

  return (
    <div className="landpage">
      <div className='landpage-title'>
        <img src = {icon} alt = {"Play Icon"} className="landpage-image"/>
        <h1 className='landpage-heading' >START PLAY</h1>
      </div> 

      <div className="landPage-buttons">
        <button onClick={handleSignUpLogin} className="sign-up-btn" >SIGN IN</button>
        <button onClick={handleSkip} className="skip-btn"> I'LL SIGN UP LATER </button>
      </div>

      <div className="terms-and-conditions">
        <p>By signing up or logging in, you agree to our Terms and Conditions and Privacy Policy.</p>
        <p>You consent to the collection and use of your data in accordance with these policies.</p>
        <p>You must be at least 13 years old to use this application. </p>
        <p className='cors-text'><strong>Please Install CORS Extension on Chrome for API to work!</strong></p>
      </div>

      <div className='design-images'>
        <img src = {gamepad} alt = {"Gamepad Icon"} className="design-image"/>
        <img src = {controller} alt = {"Controller Icon"} className="design-image"/>
      </div>
    </div>
  );
}

export default LandingPage;
