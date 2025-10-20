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
  const [error, setError] = useState(null);

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
    const trimmedBusinessName = businessName.trim();
    const trimmedEmail = email.trim();

    if (!trimmedBusinessName && !trimmedEmail) {
      setError("Business name and Email are required.");
      return false;
    }

    if (!trimmedBusinessName) {
      setError("Business name is required.");
      return false;
    }

    if (!trimmedEmail) {
      setError("Email is required.");
      return false;
    }

    setError(null);
    setUser({ businessName: trimmedBusinessName, email: trimmedEmail });
    return true;
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
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
