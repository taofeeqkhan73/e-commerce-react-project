import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("ivos_user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        localStorage.removeItem("ivos_user");
      }
    }
  }, []);

  const login = (email, password) => {
    // Simple simulated authentication
    const userData = { email, username: email.split("@")[0] };
    setUser(userData);
    localStorage.setItem("ivos_user", JSON.stringify(userData));
    return userData;
  };

  const register = (email, password, name) => {
    // Simple simulated registration
    const userData = { email, username: name || email.split("@")[0] };
    setUser(userData);
    localStorage.setItem("ivos_user", JSON.stringify(userData));
    return userData;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("ivos_user");
  };

  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
