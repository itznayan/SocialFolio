import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const setAuth = (authUser) => {
    setUser(authUser);
  };
  const setUserData = (userData) => {
    setUser({ ...userData });
  };
  const updateUser = (updatedFields) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...updatedFields, // Merge the existing user state with the updated fields
    }));
  };

  return (
    <AuthContext.Provider value={{ user, setAuth, setUserData, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
