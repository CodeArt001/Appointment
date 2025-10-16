import { useState, useEffect } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
    setLoading(false);
  }, []);

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  const Login = () => {
    if (businessName.trim() === "") return alert("Please enter business name");
    if (email.trim() === "") return alert("Please enter email");
    setUser({ businessName, email });
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
        bio,
        setBio,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
