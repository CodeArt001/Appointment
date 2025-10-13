import React, { useContext, useState } from "react";
import { AuthContext } from "./Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    Login();
    navigate("/sidebar");
  };

  const {
    email,
    setEmail,
    password,
    setPassword,
    businessName,
    setBusinessName,
    Login,
  } = useContext(AuthContext);
  return (
    <div className="min-h-screen flex flex-col lg:gap-5  gap-3 items-center justify-center hover:bg-amber-300 cursor-pointer bg-gradient-to-b from-purple-600 via-purple-500 to-pink-600 focus:ring-2 focus:ring-blue-500">
      <h1 className="lg:text-5xl text-center text-3xl font-bold font-neue lg:w-[90%] w-[60%] ">
        Create Your Booking Page{" "}
      </h1>
      <label htmlFor="Business name "></label>
      <input
        type="text"
        placeholder="Business name"
        value={businessName}
        onChange={(e) => setBusinessName(e.target.value)}
        className=" border border-gray-300 rounded-md p-2 bg-white w-[75%] h-[4rem] text-black text-2xl placeholder-black placeholder-opacity-100 px-5"
      />
      <div className="flex flex-col items-center  w-full mt-3">
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="peer invalid:border-red-500 invalid:focus:ring-red-500 invalid:border-2 invalid:text-red-500 focus:outline focus:outline-sky-500 border border-gray-300 rounded-md p-2 bg-white w-[75%] h-[4rem] text-black text-2xl placeholder-black px-5 transition-all duration-300"
        />
        <p className="text-black  mt-1 lg:text-2xl text-sm w-[75%]  opacity-0 peer-invalid:opacity-100 transition-all duration-300 text-left">
          Please provide a valid email
        </p>
      </div>
      <label htmlFor="Business name "></label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 rounded-md p-2 bg-white w-[75%] h-[4rem] text-black text-2xl placeholder-black placeholder-opacity-100 px-5"
      />

      <button
        onClick={handleContinue}
        className="cursor-pointer border border-gray-300 rounded-md p-2 bg-pink-400 w-[75%] h-[4rem] text-center text-2xl text-white font-bold mt-3"
      >
        Continue
      </button>

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
