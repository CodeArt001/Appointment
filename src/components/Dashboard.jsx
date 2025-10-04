import React, { useContext } from "react";
import { AuthContext } from "../Context/Authcontext";

const Dashboard = () => {
  const appointment = [
    { id: 1, Customer: "Customer", Service: "Service", Time: "Time" },
    { id: 2, Customer: "Jome Dov", Service: "Haircut", Time: "10:00AM" },
    { id: 3, Customer: "Jome Dov", Service: "Haircut", Time: "10:00AM" },
    { id: 4, Customer: "Jome Dov", Service: "Haircut", Time: "10:00AM" },
  ];
  const { businessName } = useContext(AuthContext);
  return (
    <div className="w-[80%] shadow h-screen px-5 overflow-hidden">
      <div className="flex flex-col text-center  py-10 gap-5 overflow-hidden">
        <p className="text-5xl font-Neue font-bold ">
          Hi {""} {businessName} ✌️
        </p>
        <div className="flex gap-10 items-center justify-center font-bold lg:text-[1.3rem] text-[0.9rem] mt-3">
          <div className="flex flex-col items-center border-white shadow bg-white px-4 py-5 ">
            <p>5</p>
            <p>Today&apos;s Booking</p>
          </div>
          <div className="flex flex-col items-center  border-white shadow bg-white px-5 py-5 ">
            <p>5</p>
            <p>Today&apos;s Booking</p>
          </div>
        </div>
      </div>
      <p className="lg:text-3xl font-bold text-center text-[1rem] mt-3">
        Today&apos;s Appointment
      </p>
      <div className="flex flex-col items-center  mt-3 ">
        {appointment.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center text-2xl text-gray-700 border border-gray-300 shadow bg-white px-8 py-6 w-[35rem] rounded-lg "
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
