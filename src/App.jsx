import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Loginpage from "./Auth/Loginpage";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import Themetoggle from "./components/Themetoggle";
import Service from "./components/Service";
import Availabilty from "./components/Availabilty";

import Visit from "./components/Visit";

function App() {
  const { user } = useContext(AuthContext);

  const isAuthenticated = !!user;
  return (
    <>
      <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen transition-colors duration-500">
        <BrowserRouter>
          <div className="absolute top-4 justify-end lg:right-9 lg:py-3 right-3 py-5 md:right-8">
            <Themetoggle />
          </div>

          <Routes>
            <Route path="/" element={<Loginpage />} />

            <Route
              path="/sidebar"
              element={isAuthenticated ? <Sidebar /> : <Navigate to={"/"} />}
            />
            <Route path="/dashboard" element={<Dashboard user={user} />} />
            <Route path="/services" element={<Service />} />
            <Route path="/availability" element={<Availabilty />} />
            <Route path="/visit" element={<Visit />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
