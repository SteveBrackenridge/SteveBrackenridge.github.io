import { useAuth0 } from '@auth0/auth0-react';

function Landed() {
  const { isAuthenticated, user } = useAuth0();

  return (
    <>
      <h1>Welcome to the World of Dünya!</h1>
      <p>Once verified as a true believer, knowledge is yours for the taking!</p>
      {isAuthenticated && (
        <div>
          <h2>Welcome, {user.name}!</h2>
          <p>You've unlocked the secrets of Dünya.</p>
        </div>
      )}
    </>
  );
}

export default Landed;
