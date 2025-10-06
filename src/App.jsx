// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Loginpage from "./Auth/Loginpage";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { useContext } from "react";
import { AuthContext } from "./Context/Authcontext";
import Themetoggle from "./components/Themetoggle";

function App() {
  const { user } = useContext(AuthContext);

  const isAuthenticated = !!user;
  return (
    <>
      <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen transition-colors duration-500">
        <BrowserRouter>
          <div className="absolute top-4 justify-end lg:right-6 right-2 ">
            <Themetoggle />
          </div>

          <Routes>
            <Route path="/" element={<Loginpage />} />

            <Route
              path="/sidebar"
              element={isAuthenticated ? <Sidebar /> : <Navigate to={"/"} />}
            />
            <Route path="/dashboard" element={<Dashboard user={user} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
