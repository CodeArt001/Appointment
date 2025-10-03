import React from "react";
import { MdAddHomeWork } from "react-icons/md";
import { MdHomeRepairService } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { PiLinkSimpleFill } from "react-icons/pi";
import logo from "../assets/images/LOGo.png";

const Sidebar = () => {
  return (
    <div className="min-h-screen flex flex-col gap-10  cursor-pointer  px-4 py-[4%] lg:py-[5%]  lg:my-0 my-5 shadow-2xl shadow-violet-500 border-white bg-white-50 lg:w-[10%] w-[7rem] ">
      <img src={logo} alt="logo" className="w-27 lg:h-10 h-5 cursor-pointer" />
      <div className="flex flex-col font-bold gap-2 items-center text-[0]">
        <MdAddHomeWork className="lg:w-15 lg:h-15 w-10 h-10 cursor-pointer" />
        <p>Dashboard</p>
      </div>
      <div className="flex flex-col font-bold gap-2 items-center">
        <MdHomeRepairService className="lg:w-15 lg:h-15 w-10 h-10 cursor-pointer" />
        <p>Services</p>
      </div>
      <div className="flex flex-col font-bold gap-2 items-center">
        <MdEventAvailable className="lg:w-15 lg:h-15 w-10 h-10 cursor-pointer" />
        <p>Appointments</p>
      </div>
      <div className="flex flex-col font-bold gap-2 items-center">
        <PiLinkSimpleFill className="lg:w-15 lg:h-15 w-10 h-10 cursor-pointer" />
        <p>My Links</p>
      </div>
    </div>
  );
};

export default Sidebar;
