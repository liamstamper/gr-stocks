import React from "react";
import upArrowImg from "../../assets/icons/uparrow.png";
import downArrowImg from "../../assets/icons/downarrow.png";

const MarketCard = ({ name, percentage, priceChange, currentPrice, isUp }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-[6px] flex flex-row items-center">
      <div
        className={`p-2 rounded-lg bg-opacity-50 ${
          isUp ? "bg-green-200" : "bg-red-200"
        } self-center flex justify-center items-center`}
      >
        <img
          src={isUp ? upArrowImg : downArrowImg}
          alt={isUp ? "Up Arrow" : "Down Arrow"}
          className="h-4 w-4 opacity-70"
        />
      </div>

      <div className="flex flex-col flex-grow ml-2">
        <div className="flex flex-row items-center">
          <div className="text-gray-800 font-bold text-xs mr-2">{name}</div>
          <div
            className={`text-xs ${isUp ? "text-green-500" : "text-red-500"}`}
          >
            {percentage}%
          </div>
        </div>

        <div className="flex flex-row items-center">
          <div className="text-gray-600 text-xs mr-2">{currentPrice}</div>
          <div
            className={`text-xs ${isUp ? "text-green-600" : "text-red-600"}`}
          >
            {priceChange}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketCard;
