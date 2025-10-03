import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const Authprovider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [businessName, setBusinessName] = useState(null);

  const Login = () => {
    setBusinessName(businessName);
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
        Login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
