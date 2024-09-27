// // AuthContext.js
// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// export const AuthProvider = ({ children }) => {
//   const [loggedIn, setLoggedIn] = useState(false);

//   const login = () => {
//     // Your login logic here
//     setLoggedIn(true);
//   };

//   const logout = () => {
//     // Your logout logic here
//     setLoggedIn(false);
//   };

//   return (
//     <AuthContext.Provider value={{ loggedIn, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
