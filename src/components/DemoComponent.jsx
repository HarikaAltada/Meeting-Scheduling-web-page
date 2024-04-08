import React from "react";

import "@progress/kendo-theme-default/dist/all.css";

import BookDrivingSlot from "./calender";
const DemoComponent = ({ onSelectDate, onTimeSelect }) => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className=" flex flex-col md:flex-row bg-white rounded-lg shadow-lg  max-auto min-w-[360px] lg:max-w-4xl">
        <section className=" w-full lg:w-1/2 p-4 md:p-8 focus:outline-none">
          <div className="flex items-center justify-center mb-4">
            <img src="./icons/icon.png" alt="fibre-icon" />
          </div>
          <h2 className="text-medium lg:text-2xl font-semibold text-gray-700 mb-4">
            Fibery Demo
          </h2>
          <div className="flex items-center mb-3">
            <img
              src="./icons/clock.png"
              alt="clock-icon"
              className="w-5 h-5 mr-2"
            />
            <h4 className="text-base font-medium text-gray-700">45 min</h4>
          </div>
          <p className="text-base leading-relaxed text-gray-600">
            Book a meeting with our Fibery team. Talk to a real person about how
            to get your processes set up with us 🐴or not 💩
          </p>
        </section>

        <section className=" flex-shrink-0 ">
          <div className="flex flex-col">
            <h3 className="text-lg lg:text-xl font-semibold text-gray-700 text-center mb-4">
              Select a Date & Time
            </h3>
            <BookDrivingSlot
              onSelectDate={onSelectDate}
              onTimeSelect={onTimeSelect}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DemoComponent;
