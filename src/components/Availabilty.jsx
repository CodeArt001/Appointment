import React, { useState } from "react";

const Availabilty = () => {
  const days = ["   SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const weeks = [
    [15, 16, 17, 18, 19, 20, 21],
    [16, 17, 18, 20, 21, 22, 23],
  ];
  const times = ["9:00AM", "10:00AM", "11:00AM", "12:00PM"];

  const [selectedDate, setSelectedDate] = useState(18);
  const [selectTime, setSelectTime] = useState("9:00AM");
  return (
    <div className="px-10">
      <div className="bg-white rounded-lg shadow ">
        <div className="mx-auto p-6 text-center">
          <h1 className="font-bold text-black lg:text-3xl text-2xl">
            Select Your Availabilty
          </h1>
          <p className="text-gray-600">
            Choose a time that works best for your next appointment
          </p>
        </div>
        <div className="py-5">
          <div className="w-fit mx-auto bg-gray-50 rounded-xl shadow text-black py-2 px-2 ">
            <div className="flex justify-between text-gray-500 text-sm mb-3">
              {days.map((day) => (
                <div key={day}>
                  <div>{day}</div>
                </div>
              ))}
            </div>
            {weeks.map((week, i) => (
              <div key={i} className="flex justify-between mb-3 gap-3">
                {week.map((date) => (
                  <div
                    key={date + i}
                    onClick={() => setSelectedDate(date)}
                    className={`cursor-pointer  ${
                      selectedDate === date
                        ? "bg-purple-600 text-white"
                        : "bg-gray-200 text-black"
                    }  rounded-lg p-2 w-10 h-10 flex items-center justify-center`}
                  >
                    {date}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-rows-2 grid-cols-2 gap-4 p-5 text-center  text-black items-center justify-center w-[30rem] mx-auto">
          {times.map((time) => (
            <div key={time} onClick={() => setSelectTime(time)}>
              <div
                className={`flex justify-center items-center  ${
                  selectTime === time
                    ? "bg-purple-600 text-white rounded-3xl h-[3rem] hover:bg-purple-300 cursor-pointer"
                    : "bg-gray-200 text-black rounded-3xl h-[3rem] hover:bg-purple-300 cursor-pointer"
                } `}
              >
                {time}
              </div>
            </div>
          ))}
        </div>
        <button className="flex mx-auto bg-gradient-to-b from-purple-600 to-purple-400 text-white font-bold py-2 px-40 mb-5 rounded-3xl hover:from-purple-500 hover:to-purple-300">
          Confirm Time
        </button>
      </div>
    </div>
  );
};

export default Availabilty;
