import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Signup.css";

import signup from '../Images/SignUp.jpg'


function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState(''); // State for storing the user's email input
  const [password, setPassword] = useState(''); // State for storing the user's password input
  const [error, setError] = useState('');   // State for storing any error message related to email validation

  const allowedDomains = ['@gmail.com', '@outlook.com', '@icloud.com', '@yahoo.com', '@hotmail.com']; 
  // Due to time, I couldn't really work with backend so I just made the code accept these domains above. I took the code from my final exam last year which contained a purchasing page.
  

  const handleSubmit = (event) => {    

    const isValid = allowedDomains.some(domain => email.endsWith(domain)); 

    // The 'some' method is used to check if at least one element in the array matches what the user puts in the field. 

    if (!isValid) {  // If the email does not show the right domain, this error will appear 
      setError('Incorrect email, email should contain proper domain');
    } else {
      setError(''); 
      navigate('/Home');
    }
  };


  return (
    <div className="signup-container">

      <div className="signup-box">
        <h2 className="signup-title">SIGN IN</h2>
        <p className='signup-intro'>{"A world of games is waiting for you"}</p>
        <form onSubmit={handleSubmit} className="signup-form">
            
          <div className="form-group">
            <label className="form-label">EMAIL</label>
            <input
              type="email"
              className="form-input"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            /></div>

          <div className="form-group">
            <label className="form-label">PASSWORD</label>
            <input
              type="password"
              className="form-input"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            /></div>

          {error && <p className="form-error">{error}</p>}
          <button type="submit" className="submit-button">
            Sign In
          </button>
        </form>

          <footer className="signup-footer">
            © 2025 Raw Games. All rights reserved.
          </footer>
      </div>
        <div class="signup-image-container">
        <img src = {signup} alt = {"Person playing Playstation"} className="sign-up-image"/>
      </div>
    </div>
  );
}

export default Signup;