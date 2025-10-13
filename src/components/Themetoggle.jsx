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
    <div className="flex items-center rounded-lg border p-1 transition-all duration-500 hover:scale-105 shadow">
      <button onClick={toggleTheme} className="">
        <img
          src={theme === "dark" ? sunIcn : darkmode}
          alt=""
          className="lg:w-8 lg:h-8 w-5 h-5"
        />
      </button>
    </div>
  );
};

export default Themetoggle;
