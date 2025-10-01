import React from "react";

const Loginpage = () => {
  return (
    <div className="min-h-screen flex flex-col gap-5 items-center justify-center hover:bg-amber-300 cursor-pointer bg-gradient-to-b from-purple-600 via-purple-500 to-pink-600 focus:ring-2 focus:ring-blue-500">
      <h1 className="lg:text-5xl text-center text-4xl font-bold font-neue">
        Create Your Booking Page{" "}
      </h1>
      <label htmlFor="Business name "></label>
      <input
        type="text"
        placeholder="Business name"
        className="border border-gray-300 rounded-md p-2 bg-white w-[75%] h-[4rem]"
      />
      <label htmlFor="Business name "></label>
      <input
        type="text"
        placeholder="Business name"
        className="border border-gray-300 rounded-md p-2 bg-white w-[75%] h-[4rem]"
      />
      <label htmlFor="Business name "></label>
      <input
        type="text"
        placeholder="Business name"
        className="border border-gray-300 rounded-md p-2 bg-white w-[75%] h-[4rem]"
      />
    </div>
  );
};

export default Loginpage;
