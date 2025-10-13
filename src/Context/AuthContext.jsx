import { useState, useEffect } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(savedUser);
  }, []);

  useEffect(() => {
    if (user) localStorage.setItem("user", user);
    else localStorage.removeItem("user");
  }, [user]);

  const Login = () => {
    if (businessName.trim() === "") return alert("Please enter business name");
    if (email.trim() === "") return alert("Please enter email");
    setUser(businessName);
  };

  const isAuthenticated = () => {
    return user != null;
  };

  // const handleBiochange = (e) => {
  //   setBio(e.target.value);
  // };
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
        // handleBiochange,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
