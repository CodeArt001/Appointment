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
    <div className="w-[80%] shadow min-h-screen px-5 pb-10 overflow-y-auto">
      <div className="flex flex-col text-center  py-3 gap-5 ">
        <p className="text-5xl font-Neue font-bold animate-pulse ">
          Hi {""} {businessName} ✌️
        </p>
        <div className="flex gap-10 items-center justify-center font-bold lg:text-[1.3rem] text-[0.9rem] mt-3 dark:text-black">
          <div className="flex flex-col items-center border-white shadow bg-white px-4 py-5 rounded-3xl ">
            <p>5</p>
            <p>Today&apos;s Booking</p>
          </div>
          <div className="flex flex-col items-center  border-white shadow bg-white px-5 py-5 rounded-3xl">
            <p>5</p>
            <p>Today&apos;s Booking</p>
          </div>
        </div>
      </div>
      <p className="lg:text-3xl font-bold text-center text-[1rem] my-5 ">
        Today&apos;s Appointment
      </p>
      <div className="flex flex-col items-center gap-2 mt-3 shadow-2xl shadow-violet-300 pb-10">
        {appointment.map((item) => (
          <div
            key={item.id}
            className="flex  shadow-violet-300  justify-between items-center text-2xl text-gray-700 border border-gray-300 shadow-2xl bg-white px-8 py-6 w-[35rem] rounded-lg "
          >
            <p
              className={`w-1/3 text-center ${
                item.Customer !== "Customer" ? "text-black" : "text-gray-700"
              }`}
            >
              {item.Customer}
            </p>
            <p
              className={`w-1/3 text-center ${
                item.Service !== "Service" ? "text-black" : "text-gray-700"
              } `}
            >
              {item.Service}
            </p>
            <p
              className={`w-1/3 text-center text-black ${
                item.Time !== "Time" ? "text-black" : "text-gray-700"
              }`}
            >
              {item.Time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
