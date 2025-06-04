import React from 'react';
import { useInfo } from '../SignUp/UserContext';
import { useNavigate } from 'react-router-dom';
import "./ProfilePage.css";

import user from "../Images/UserIcon.png";

function ProfilePage () {
  const { userData } = useInfo();
  const navigate = useNavigate();

  const isSignedIn = userData.name && userData.name !== '' && userData.name !== 'Not signed in';

  return (
    <div>
      {isSignedIn ? (      //If signed in - user's details will appear 
        <div className="user-info">
          <h2 className='account-title'>Account</h2>

          <div className='user-display'>
            <img src={user} alt="User Icon" className='user-icon' />

            <div className="user-details">
              <p><strong>{userData.name}</strong></p>
              {/* <p><strong>{userData.surname}</strong></p> */}
              <p>{userData.email}</p>
            </div>
          </div>
        </div>
      ) : (                 //If not signed in - sign in button will appear
        <div className="user-info">
          <h2 className='account-title'>Account</h2>
          <p className="signup-state">You are not signed in.</p>
          <button onClick={() => navigate('/signup')} className="profile-sign-up">Sign In</button>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
