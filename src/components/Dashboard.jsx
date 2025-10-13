import React, { useContext } from "react";
import { AuthContext } from "../Context/Authcontext";
import { IoIosNotifications } from "react-icons/io";
import cal from "../assets/images/calendar.png";
import earns from "../assets/images/earn.jpg";
import per from "../assets/images/person.png";
import star from "../assets/images/start.png";
import pll from "../assets/images/plus-198.png";
import avail from "../assets/images/availabilty.png";
import LINK from "../assets/images/link.png";

const Dashboard = () => {
  const appointment = [
    { id: 1, Customer: "Customer", Service: "Service", Time: "Time" },
    { id: 2, Customer: "Jome Dov", Service: "Haircut", Time: "10:00AM" },
    { id: 3, Customer: "Jome Dov", Service: "Haircut", Time: "10:00AM" },
    { id: 4, Customer: "Jome Dov", Service: "Haircut", Time: "10:00AM" },
  ];
  const { businessName } = useContext(AuthContext);
  return (
    <div className="lg:w-[100%] md:w-full w-full  shadow-2xl shadow-violet-500 min-h-screen px-8 pb-10 overflow-y-auto  ">
      <div className="flex flex-col py-3 gap-3  ">
        <div className="flex lg:flex-row md:flex-row flex-row  justify-between items-center  gap-3 px-5">
          <p className="lg:text-5xl md:text-5xl text-sm  font-Neue font-bold animate-pulse drop-shadow-[0_0_20px_#facc15] ">
            Welcome Back@ {""} {businessName}{" "}
            <span className="animate-wiggle inline-block lg:text-6xl md:text-7xl text-sm">
              👋
            </span>
            <p className="lg:text-2xl text-xs">Friday, Oct 10,2025</p>
          </p>
          <div className="lg:text-6xl text-sm md:text-5xl">
            <IoIosNotifications />
          </div>
        </div>
        <div className="text-center px-3 flex flex-row items-center gap-4 cursor-pointer overflow-x-auto lg:gap-10 lg:justify-center  font-bold lg:text-[1.3rem] md:text-[2rem] text-[1rem] mt-3 dark:text-black max-w-full">
          <div className="flex flex-col  items-center border-white shadow bg-white px-4 py-5 rounded-3xl min-w-[10rem] sm:min-w-[13rem] md:min-w-[16rem] ">
            <img src={cal} alt="" className="size-10" />
            <p>
              Today&apos;s <br /> Appointments
            </p>
            <p>5</p>
          </div>
          <div className="flex flex-col items-center  border-white shadow bg-white px-5 py-5 rounded-3xl min-w-[10rem] sm:min-w-[13rem] md:min-w-[16rem]">
            <img src={earns} alt="" className="size-10" />
            <p>
              Earnings <br /> This Week
            </p>
            <p>#45,100</p>
          </div>
          <div className="flex flex-col items-center  border-white shadow bg-white px-5 py-5 rounded-3xl min-w-[10rem] sm:min-w-[13rem] md:min-w-[16rem]">
            <img src={per} alt="" className="size-10" />
            <p>
              Total <br /> CLient
            </p>
            <p>132</p>
          </div>
          <div className="flex flex-col items-center  border-white shadow bg-white px-5 py-5 rounded-3xl min-w-[10rem] sm:min-w-[13rem] md:min-w-[16rem]">
            <img src={star} alt="" className="size-10" />
            <p>Ratings</p>
            <p>4.9/5</p>
            <p>.</p>
          </div>
        </div>
      </div>
      <p className="lg:text-4xl font-bold px-5 text-[1.2rem] my-6 md:text-4xl ">
        Today&apos;s Appointment
      </p>
      <div className="">
        <div className="flex flex-col items-center md:gap-5 pb-3 w-full shadow-amber-300 ">
          <div className=" shadow-2xl shadow-violet-500 grid grid-cols-3 text-xs md:text-2xl  text-white bg-gradient-to-r from-violet-700 to-purple-600  py-3 rounded-lg lg:max-w-full md:h-15 w-full  font-semibold  lg:text-base tracking-wide">
            <p className="text-center">Customer</p>
            <p className="text-center">Service</p>
            <p className="text-center">Time</p>
          </div>
        </div>

        {/* Appointment Rows */}
        <div className="flex flex-col items-center gap-3  pb-10 w-full shadow-amber-300 ">
          {appointment
            .filter((item) => item.Customer !== "Customer")
            .map((item) => (
              <div
                key={item.id}
                className=" shadow-2xl shadow-violet-500 grid grid-cols-3 justify-between items-center text-gray-800 border border-gray-200 bg-white px-4 py-4 lg:max-w-full  md:h-15 w-full rounded-lg  text-sm md:text-[1.5rem] lg:text-base"
              >
                <p className="text-center font-bold lg:text-sm text-xs md:text-[1.5rem] ">
                  {item.Customer}
                </p>
                <p className="text-center">{item.Service}</p>
                <p className="text-center">{item.Time}</p>
              </div>
            ))}
          <button className="shadow-2xl shadow-violet-500 text-2xl bg-gradient-to-r from-violet-700 to-purple-600 text-white py-2 px-4 rounded-lg  w-[100%] mt-4">
            View All Appointments
          </button>
        </div>
      </div>
      <div className="flex lg:pl-0 pl-[13rem] flex-row items-center lg:gap-10 gap-4 justify-center overflow-x-auto  text-black lg:text-[1.3rem] md:text-[1.5rem] text-[1rem] font-bold max-w-full">
        <button className=" flex flex-col  items-center border-white shadow bg-white px-4 py-5 rounded-3xl min-w-[10rem] sm:min-w-[13rem] md:min-w-[16rem]">
          <p>Add</p>
          <p>New Service</p>
          <img src={pll} alt="" className="size-10" />
        </button>
        <button className="flex flex-col  items-center border-white shadow bg-white px-4 py-5 rounded-3xl min-w-[10rem] sm:min-w-[13rem] md:min-w-[16rem]">
          <img src={avail} alt="" className="size-10" />
          <p>Set Availability</p>
          <p>.</p>
        </button>
        <button className="flex flex-col  items-center border-white shadow bg-white px-4 py-5 rounded-3xl min-w-[10rem] sm:min-w-[13rem] md:min-w-[16rem]">
          <p>Add</p>
          <p>New Service</p>
          <img src={LINK} alt="" className="size-10" />
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
