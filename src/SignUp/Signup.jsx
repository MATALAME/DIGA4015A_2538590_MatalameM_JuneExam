import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Signup.css";
import { useInfo } from '../SignUp/UserContext';

import signup from '../Images/SignUp.jpg'


function Signup() {
  const navigate = useNavigate();
  const { setUserData } = useInfo();

  const [name, setName] = useState('');

  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');   // State for storing any error message related to email validation
  const [passwordError, setPasswordError] = useState('');

  const allowedDomains = ['@gmail.com', '@outlook.com', '@icloud.com', '@yahoo.com', '@hotmail.com']; 
  // Due to time, I couldn't really work with backend so I just made the code accept these domains above. I took the code from my final exam last year which contained a purchasing page.
  

  const handleSubmit = (event) => {    
    event.preventDefault()  //A standard HTML5 tooltip kept appearing which was affecting my code for the '<p> error' I wanted to display so I had to add this line to remove that default tooltip.

     const isEmailValid = allowedDomains.some(domain => email.endsWith(domain)); // The 'some' method is used to check if at least one element in the array matches what the user puts in the field. 
    if (!isEmailValid) {
      setEmailError('Email must end with a valid domain like @gmail.com');
      return;
    } else {
      setEmailError('');
    }

    if (password.length < 8) {   
      setPasswordError('Password must be at least 8 characters long');
      return;
    }
    if (!/[A-Z]/.test(password)) {       //This was something new to learn, this checks if at least one of the characters filled in by the user is a capital letter.
      setPasswordError('Password must include at least one capital letter');
      return;
    }
    if (!/[0-9]/.test(password)) {       //This one checks whether the password contains at least one number.
      setPasswordError('Password must include at least one number');
      return;
    }

    setPasswordError('');

    setUserData({
  name: name,
  email: email,
});
    navigate('/Home');
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">SIGN IN</h2>
        <p className="signup-intro">A world of games is waiting for you</p>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label className="form-label">NAME & SURNAME</label>
            <input
              type="text"
              className="form-input"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">EMAIL</label>
            <input
              type="text"
              className="form-input"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            {emailError && <p className="form-error">{emailError}</p>}
          </div>

          <div className="form-group">
            <label className="form-label">PASSWORD</label>
            <input
              type="password"
              className="form-input"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            {passwordError && <p className="form-error">{passwordError}</p>}
          </div>

          <button type="submit" className="submit-button">
            Sign In
          </button>
        </form>

        <footer className="signup-footer">
          © 2025 Raw Games. All rights reserved.
        </footer>
      </div>

      <div className="signup-image-container">
        <img src={signup} alt="Person playing Playstation" className="sign-up-image" />
      </div>
    </div>
  );
}

export default Signup;