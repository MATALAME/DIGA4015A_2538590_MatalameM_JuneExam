import React from 'react';
import { useInfo } from '../SignUp/UserContext';

function ProfilePage (){
    const { userData } = useInfo();

    return(
        <div>
    <div className ="user-info">
      <p>{userData.name}</p>
      <p>User: {userData.email}</p>
    </div>
        </div>
    )
}

export default ProfilePage;