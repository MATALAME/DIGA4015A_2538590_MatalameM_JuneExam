import React from 'react';
import { useInfo } from '../SignUp/UserContext';

function ProfilePage (){
    const { userData } = useInfo();

    return(
        <div>
    <div className ="user-info">
    <h2> Account </h2>
      <p>{userData.name}</p>
      <p>User: {userData.email}</p>
    </div>
        </div>
    )
}

export default ProfilePage;