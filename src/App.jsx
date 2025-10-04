// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loginpage from "./Auth/Loginpage";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { useContext } from "react";
import { AuthContext } from "./Context/Authcontext";

function App() {
  const { user } = useContext(AuthContext);

  const isAuthenticated = !!user;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/loginpage"
            element={isAuthenticated ? <Sidebar /> : <Loginpage />}
          />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
