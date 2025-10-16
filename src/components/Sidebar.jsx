import React, { useState } from "react";
import { MdAddHomeWork } from "react-icons/md";
import { MdHomeRepairService } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { PiLinkSimpleFill } from "react-icons/pi";
import logo from "../assets/images/LOGO2.jpg";
import Dashboard from "./Dashboard";
import Service from "./Service";
import Availabilty from "./Availabilty";

import Visit from "./Visit";

const Sidebar = () => {
  const [activePage, setActivePage] = useState(null);
  const handleToggle = (page) => {
    setActivePage((prev) => (prev === page ? null : page));
  };
  return (
    <div className="flex-grow dark:text-white  ">
      <div className="lg:px-5 lg:py-3 py-1 md:px-3">
        <div className=" border shadow-md rounded-4xl flex flex-row justify-between items-center w-full cursor-pointer px-4 py-[10%] lg:py-[5%] lg:my-0 my-5 shadow-violet-300 border-white bg-white-50 max-w-full  ">
          <div className="flex items-center gap-3 shadow-2xl shadow-violet-100 bg-white px-3 py-2 rounded-3xl text-black">
            <img
              src={logo}
              alt="logo"
              className=" lg:size-15 size-5 md:size-10 cursor-pointer "
            />
            <p className="lg:text-6xl md:text-4xl text-sm font-bold">BookMe</p>
          </div>
          <div className="">
            <div
              onClick={() => handleToggle("dashboard")}
              className="flex flex-col font-bold gap-2 items-center  lg:text-[2rem] text-xs"
            >
              <MdAddHomeWork className="lg:w-15 lg:h-15 w-8 h-10 cursor-pointer" />
              <p>Dashboard</p>
            </div>
          </div>

          <div
            onClick={() => handleToggle("services")}
            className="flex flex-col font-bold gap-2 items-center lg:text-[2rem] text-xs "
          >
            <MdHomeRepairService className="lg:size-17 w-10 h-10 cursor-pointer" />
            <p>Services</p>
          </div>
          <div
            onClick={() => handleToggle("availability")}
            className="flex flex-col font-bold gap-2 items-center lg:text-[2rem] text-xs "
          >
            <MdEventAvailable className="lg:w-15 lg:h-15 w-8 h-10 cursor-pointer" />
            <p>Availability</p>
          </div>
          <div
            onClick={() => handleToggle("links")}
            className="flex flex-col font-bold gap-2 items-center lg:text-[2rem] text-xs "
          >
            <PiLinkSimpleFill className="lg:w-15 lg:h-15 w-8 h-10 cursor-pointer" />
            <p>Links</p>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full">
        {activePage === "dashboard" && <Dashboard />}
        {activePage === "services" && <Service />}
        {activePage === "availability" && <Availabilty />}
        {activePage === "links" && <Visit />}
      </div>
    </div>
  );
};

export default Sidebar;
