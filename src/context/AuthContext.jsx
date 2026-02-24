import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // For now, we set this to null (not logged in)
  // When you want to see the Admin panel, you can temporarily change this to true
  const [currentUser, setCurrentUser] = useState(null);

  const login = (email, password) => {
    if (email === "admin@test.com" && password === "admin123") {
      setCurrentUser({ email: "admin@test.com" });
      return true;
    }
    return false;
  };

  const logout = () => setCurrentUser(null);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);