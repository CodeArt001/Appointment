import React from "react";
import { MdAddHomeWork } from "react-icons/md";
import { MdHomeRepairService } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { PiLinkSimpleFill } from "react-icons/pi";
import logo from "../assets/images/LOGo.png";

const Sidebar = () => {
  return (
    <div className="min-h-screen flex flex-col gap-10  cursor-pointer  px-5 py-5 shadow-2xl shadow-violet-500 border-white bg-white-50 w-[10%]">
      <img src={logo} alt="logo" className="w-25 h-10 cursor-pointer" />
      <MdAddHomeWork className="w-15 h-15 cursor-pointer" />
      <MdHomeRepairService className="w-15 h-15 cursor-pointer" />
      <MdEventAvailable className="w-15 h-15 cursor-pointer" />
      <PiLinkSimpleFill className="w-15 h-15 cursor-pointer" />
    </div>
  );
};

export default Sidebar;
