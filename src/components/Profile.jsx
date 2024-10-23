import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated, } = useAuth0();

  if (!isAuthenticated) {
    return <div>Please log in to see your profile</div>;
  }

  return (
    isAuthenticated && (
      <div>               
        <h2>{user.name}</h2>         
        <p>{user.email}</p>       
      </div>     
      )
  )
};

export default Profile;
