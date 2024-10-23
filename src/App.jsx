import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react'
import Login from './components/Login'
import Logout from './components/Logout'
import Profile from './components/Profile'
import Landed from './components/Landed'

function App() {
  
  const { isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated ? <Landed /> : <Login />}
      <Logout />
      <Profile />
    </>
  );
};

export default App
