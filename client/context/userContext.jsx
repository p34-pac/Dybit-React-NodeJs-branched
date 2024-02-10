import React, { createContext, useState, useEffect } from "react";
import axios from "axios";



export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
        try {
        const response = await axios.get('http://localhost:3000/profile');
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
      <UserContext.Provider value={{ user }}>
        {children}
    </UserContext.Provider>
  );
};
