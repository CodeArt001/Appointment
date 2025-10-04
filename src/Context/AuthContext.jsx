import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [businessName, setBusinessName] = useState("");

  const Login = () => {
    if (businessName.trim() !== "") {
      setUser(businessName);
    }
  };

  const isAuthenticated = () => {
    return user != null;
  };
  return (
    <AuthContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        businessName,
        setBusinessName,
        user,
        setUser,
        Login,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
