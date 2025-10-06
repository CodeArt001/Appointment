import React, { useEffect, useState } from "react";
import sunIcn from "../assets/images/sunIcon.png";
import darkmode from "../assets/images/darkMode.png";

const Themetoggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <div className="bg-dark-gray-200 rounded-lg border p-2 transition-all duration-500 hover:scale-105 shadow">
      <button onClick={toggleTheme} className="">
        <img
          src={theme === "dark" ? sunIcn : darkmode}
          alt=""
          className="w-8 h-8"
        />
      </button>
    </div>
  );
};

export default Themetoggle;
