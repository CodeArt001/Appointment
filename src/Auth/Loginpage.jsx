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
        className="border border-gray-300 rounded-md p-2 bg-white w-[75%] h-[4rem] text-black text-2xl placeholder-black placeholder-opacity-100 px-5"
      />
      <label htmlFor="Business name "></label>
      <input
        type="text"
        placeholder="Email"
        className="border border-gray-300 rounded-md p-2 bg-white w-[75%] h-[4rem] text-black text-2xl placeholder-black placeholder-opacity-100 px-5"
      />
      <label htmlFor="Business name "></label>
      <input
        type="text"
        placeholder="Password"
        className="border border-gray-300 rounded-md p-2 bg-white w-[75%] h-[4rem] text-black text-2xl placeholder-black placeholder-opacity-100 px-5"
      />

      <button className="cursor-pointer border border-gray-300 rounded-md p-2 bg-pink-400 w-[75%] h-[4rem] text-center text-2xl text-white font-bold mt-3">
        Continue
      </button>
      {/* <input
        type=""
        placeholder="Continue"
        className="cursor-pointer border border-gray-300 rounded-md p-2 bg-pink-400 w-[75%] h-[4rem] text-center text-2xl placeholder-white placeholder-opacity-100 font-bold px-5"
      /> */}
      <p className="text-white lg:text-2xl mt-3 text-sm font-bold">
        Already have an account?{" "}
        <a href="" className="cursor-pointer">
          Log in
        </a>
      </p>
    </div>
  );
};

export default Loginpage;
