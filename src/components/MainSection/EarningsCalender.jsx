import React from "react";

const EarningsCalender = () => {
  return (
    <div className="w-[360px] h-[515px] ml-[10px] mt-[15px] mb-[15px] border border-gray-200 rounded-xl justify-center text-center p-[15px]">
      <div className="text-gray-900 text-left text-[17px] pb-[15px] border-b border-gray-200 font-roboto">
        Earnings Calender
        <div
          className="text-gray-500 text-[14px] font-semibold"
          style={{ fontFamily: "Roboto, sans-serif", fontWeight: 400 }}
        >
          Based on popular stocks
        </div>
      </div>
    </div>
  );
};

export default EarningsCalender;
