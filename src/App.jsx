import React, { useState } from 'react';
import { getUserByName } from './api';
import './App.scss';

export const App = () => {
  const [user, setUser] = useState(null);
  const [isHome, setIsHome] = useState(true);
  const [isProfile, setIsProfile] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);

  const handleHome = () => {
    setIsHome(true);
    setIsLogin(false);
    setIsProfile(false);
  };

  const handleProfile = () => {
    if (user) {
      setIsHome(false);
      setIsLogin(false);
      setIsProfile(true);
    } else {
      setIsHome(false);
      setIsLogin(true);
      setIsProfile(false);
    }
    
  };

  const handleLogin = () => {
    setIsHome(false);
    setIsLogin(true);
    setIsProfile(false);
  };

  const handleSubmit = () => {
    const selectedUser = getUserByName(login)

    if (selectedUser && selectedUser.password === password) {
      setUser(selectedUser);
      setIsProfile(true);
      setIsLogin(false);
    } else {
      setIsError(true);
    }
  };


  return (
    <>
      <header>
        <button
          onClick={handleHome}
        >
          Home
        </button>

        <button
            onClick={handleProfile}
        >
          Profile
        </button>

        <button
            onClick={handleLogin}
        >
          Login
        </button>
      </header>
      <main>
        <h1>Test Task</h1>

        {isHome && (
          <h2>Home page</h2>
        )}

        {isProfile && user && (
          <>
            <p>
              Name:
              {user.name}
            </p>
            <p>
              Surname:
              {user.surname}
            </p>
          </>
        )}

        {isLogin && (
          <>
            <form 
              onSubmit={handleSubmit}
            >
              <input 
                type="text" 
                placeholder='enter your email' 
                required
                value={login}
                onChange={(event) => setLogin(event.target.value)}
              />
              <input 
                type="password" 
                placeholder='enter your password' 
                required 
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              {isError && (
                <p>Please enter valid details</p>
              )}
              <button>submit</button>
            </form>
          </>
        )}
      </main>
    </>
  );
};
