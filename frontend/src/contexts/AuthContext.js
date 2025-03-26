// import React, { createContext, useContext, useState } from "react";
// import jwtDecode from "jwt-decode";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(() => {
//     const token = localStorage.getItem("token");
//     return token ? jwtDecode(token) : null; // Decode token if it exists
//   });

//   const login = (token) => {
//     localStorage.setItem("token", token);
//     const decoded = jwtDecode(token);
//     setUser(decoded);
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


// // // import React, { createContext, useContext, useState } from "react";
// // // import jwtDecode from "jwt-decode";

// // // const AuthContext = createContext();

// // // export const AuthProvider = ({ children }) => {
// // //   const [user, setUser] = useState(() => {
// // //     const token = localStorage.getItem("token");
// // //     return token ? jwtDecode(token) : null;
// // //   });

// // //   const login = (token) => {
// // //     localStorage.setItem("token", token);
// // //     const decoded = jwtDecode(token);
// // //     setUser(decoded);
// // //   };

// // //   const logout = () => {
// // //     localStorage.removeItem("token");
// // //     setUser(null);
// // //   };

// // //   return (
// // //     <AuthContext.Provider value={{ user, login, logout }}>
// // //       {children}
// // //     </AuthContext.Provider>
// // //   );
// // // };

// // // export const useAuth = () => useContext(AuthContext);

// src/contexts/AuthContext.js
// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const login = (username, password) => {
//     // implementation for logging in
//   };

//   return (
//     <AuthContext.Provider value={{ user, login }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuthContext = () => {
//   return useContext(AuthContext);
// };

// src/contexts/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    // login logic here
  };

  const register = (username, password) => {
    // registration logic here
  };
  
  return (
    <AuthContext.Provider value={{ user, login, register }}>
      {children}
    </AuthContext.Provider>
  );
};

// export const useAuthContext = () => {
//   return useContext(AuthContext);
// };

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  console.log("Auth Context:", context); // This will help you debug
  return context;
};