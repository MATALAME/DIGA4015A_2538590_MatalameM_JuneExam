import React from 'react';
import { useInfo } from '../SignUp/UserContext';
import "./ProfilePage.css";

import user from "../Images/UserIcon.png";

function ProfilePage (){
    const { userData } = useInfo();

    return(
    <div>
        <div className ="user-info">
         <h2 className='account-title'> Account </h2>

        <div className='user-display'> 
            <img src={user} alt="User Icon" className='user-icon' />
  
        <div className="user-details">
            <p><strong>{userData.name}</strong></p>
            {/* <p><strong>{userData.surname}</strong></p> */}
            <p>{userData.email}</p>
        </div>
        </div>

        </div>
    </div>
    )
}

export default ProfilePage;