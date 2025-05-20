import React from 'react';
import { useNavigate } from "react-router-dom";

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
    <div className="LandPage">
      <h1 >Start Play</h1>

      <div className="LandPage-Btn">
        <button onClick={handleSignUpLogin} className="Sign Up" >Sign-Up / Login </button>

        <button onClick={handleSkip} className="Skip"> I'll sign up later </button>
      </div>

      <p className="Terms and Conditions">
        By signing up or logging in, you agree to our Terms and Conditions and Privacy Policy. You consent to the collection and use of your data 
        in accordance with these policies. You must be at least 13 years old to use this application. 
      </p>
    </div>
  );
}

export default LandingPage;
