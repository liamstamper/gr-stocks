import React from "react";

const AboutPage = () => {
  return (
    <>
      <div className="max-w-[1025px] w-full flex flex-row justify-center items-center mt-2 mx-auto space-x-5"></div>
      <div className="flex flex-row items-center">
        <div className="font-[poppins-regular] font-medium text-5xl uppercase tracking-wide justify-center text-center flex-grow">
          Gr Stocks.
        </div>
      </div>
      <div className="flex flex-row justify-center items-center mx-auto text-[11px] text-gray-600 space-x-4">
        <button className="hover:underline">About</button>
        <span className="text-gray-400">|</span>
        <button className="hover:underline">Build Process</button>
        <span className="text-gray-400">|</span>
        <button className="hover:underline">Updates</button>
        <span className="text-gray-400">|</span>
        <button className="hover:underline">More</button>
      </div>
      <div className="border border-gray-400 mt-3"></div>
      <div className="w-full h-[35px] mt-[20px] bg-cyan-900 flex justify-center items-center">
        <span className="text-xl font-extrabold text-white">
          LIVE UPDATES | IN-PROGRESS
        </span>
      </div>
      <div className="max-w-[1025px] w-full flex flex-col items-center mt-4 mx-auto">
        <div className="text-2xl max-w-[600px] text-left font-bold">
          Stock Market News, July 29, 2024: S&P 500 Inches Up to Kick Off Busy
          Week<br></br>
          <span className="text-lg  text-gray-700">
            Four of the Magnificent Seven are set to report earnings in coming
            days
          </span>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
