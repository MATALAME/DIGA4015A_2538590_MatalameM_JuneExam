import React from 'react';
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

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
      <h1 className='landpage-title' >START PLAY</h1>

      <div className="landPage-buttons">
        <button onClick={handleSignUpLogin} className="sign-up-btn" >SIGN UP/LOG IN </button>
        <button onClick={handleSkip} className="skip-btn"> I'LL SIGN UP LATER </button>
      </div>

      <p className="terms-and-conditions">
        By signing up or logging in, you agree to our Terms and Conditions and Privacy Policy. You consent to the collection and use of your data 
        in accordance with these policies. You must be at least 13 years old to use this application. 
      </p>
    </div>
  );
}

export default LandingPage;
