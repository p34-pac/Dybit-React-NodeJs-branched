// UserContext.jsx
import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get('/profile');
      setUser(response.data);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setIsLoggedIn(false);
    }
  };

  const checkLoginStatus = async () => {
    try {
      const response = await axios.get('/check-login-status');
      setIsLoggedIn(response.data.loggedIn);
      if (response.data.loggedIn) {
        setUser(response.data.user);
      }
    } catch (error) {
      console.error('Error checking login status:', error);
      setIsLoggedIn(false);
    }
  };

  const logout = async (redirect) => { 
    try {
      await axios.post('/logout');
      setUser(null);
      setIsLoggedIn(false);
      redirect();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn, fetchUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

