import React, { useContext } from "react";

const Dashboard = () => {
  return (
    <div className="w-[40%] shadow min-h-screen px-5">
      <div className="flex flex-col text-center  py-5 gap-5">
        <p className="text-4xl font-Neue font-bold ">Hi Barber king ✌️ </p>
        <div className="flex gap-10 items-center justify-center font-bold text-[1rem]">
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
      <p className="text-2xl font-bold text-center ">
        Today&apos;s Appointment
      </p>
    </div>
  );
};

export default Dashboard;
