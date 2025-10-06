import React, { useContext } from "react";
import { AuthContext } from "../Context/Authcontext";
import Themetoggle from "./Themetoggle";

const Dashboard = () => {
  const appointment = [
    { id: 1, Customer: "Customer", Service: "Service", Time: "Time" },
    { id: 2, Customer: "Jome Dov", Service: "Haircut", Time: "10:00AM" },
    { id: 3, Customer: "Jome Dov", Service: "Haircut", Time: "10:00AM" },
    { id: 4, Customer: "Jome Dov", Service: "Haircut", Time: "10:00AM" },
  ];
  const { businessName } = useContext(AuthContext);
  return (
    <div className="lg:w-[80%] w-full  shadow-2xl shadow-violet-500 min-h-screen px-5 pb-10 overflow-y-auto mt-9 ">
      <div className="flex flex-col  text-center  py-3 gap-3  ">
        <p className="lg:text-5xl text-2xl  font-Neue font-bold animate-pulse drop-shadow-[0_0_20px_#facc15] ">
          Hi {""} {businessName} ✌️
        </p>
        <div className=" lg:flex lg:flex-row flex flex-col lg:gap-8  gap-5 items-center justify-center font-bold lg:text-[1.3rem] text-[1rem] mt-3 dark:text-black">
          <div className="flex flex-col items-center border-white shadow bg-white px-4 py-5 rounded-3xl lg:[w-0] w-[13rem] ">
            <p>5</p>
            <p>Today&apos;s Booking</p>
          </div>
          <div className="flex flex-col items-center  border-white shadow bg-white px-5 py-5 rounded-3xl lg:[w-0] w-[13rem]">
            <p>5</p>
            <p>Today&apos;s Booking</p>
          </div>
        </div>
      </div>
      <p className="lg:text-3xl font-bold text-center text-[1.2rem] my-5 ">
        Today&apos;s Appointment
      </p>
      <div className="flex flex-col items-center gap-3 mt-3 pb-10 w-full  shadow-amber-300">
        {/* Header Row */}
        <div className="shadow-2xl shadow-violet-500 grid grid-cols-3 text-xs  text-white bg-gradient-to-r from-violet-700 to-purple-600  py-3 rounded-lg lg:max-w-[35rem] w-full  font-semibold  lg:text-base tracking-wide">
          <p className="text-center">Customer</p>
          <p className="text-center">Service</p>
          <p className="text-center">Time</p>
        </div>

        {/* Appointment Rows */}
        {appointment
          .filter((item) => item.Customer !== "Customer") // hide header row data
          .map((item) => (
            <div
              key={item.id}
              className="shadow-2xl shadow-violet-500 grid grid-cols-3 justify-between items-center text-gray-800 border border-gray-200 bg-white px-4 py-4 lg:max-w-[35rem] w-full rounded-lg  text-sm lg:text-base"
            >
              <p className="text-center font-bold lg:text-sm text-xs">
                {item.Customer}
              </p>
              <p className="text-center">{item.Service}</p>
              <p className="text-center">{item.Time}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
