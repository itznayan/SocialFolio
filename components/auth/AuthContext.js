import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const setAuth = (authUser) => {
    setUser(authUser);
  };
  const setUserData = (userData) => {
    setUser({ ...userData });
  };

  const handleUserDetails = (userDetail) => {
    setUserDetails(userDetail);
  };
  return (
    <AuthContext.Provider value={{ user, setAuth, setUserData, handleUserDetails, userDetails }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
