import React from "react";

const AboutPage = () => {
  return (
    <>
      <div className="max-w-[1025px] w-full flex flex-row justify-center items-center mt-2 mx-auto space-x-5">
        <div>Nasdaq</div>
        <div>S&P 500</div>
      </div>
      <div className="border border-1 mt-2"></div>
      <div className="font-roboto font-semibold text-center pt-4 text-6xl uppercase tracking-wider">
        Gr Stocks
      </div>
      <div className="flex flex-row justify-center items-center mx-auto text-xs text-gray-600 space-x-4">
        <button className="hover:underline">About</button>
        <span className="text-gray-400">|</span>
        <button className="hover:underline">Build Process</button>
        <span className="text-gray-400">|</span>
        <button className="hover:underline">Updates</button>
        <span className="text-gray-400">|</span>
        <button className="hover:underline">More</button>
      </div>
      <div className="border border-1 mt-3"></div>
      <div className="max-w-[1025px] w-full flex flex-row justify-center items-center mt-4 mx-auto">
        <div className="text-2xl font-semibold">
          About The Project: GR Stocks{" "}
        </div>
      </div>
    </>
  );
};

export default AboutPage;
