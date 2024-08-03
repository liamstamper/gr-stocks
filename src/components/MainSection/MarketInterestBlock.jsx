import React from "react";
import { Link } from "react-router-dom";
import InfoIcon from "../../assets/icons/info.png";
import AddCircle from "../../assets/icons/addcircle.png";
import upArrowImg from "../../assets/icons/uparrow.png";
import downArrowImg from "../../assets/icons/downarrow.png";

const MarketInterestBlock = ({
  name,
  percentage,
  priceChange,
  currentPrice,
  isUp,
}) => {
  return (
    <li className="flex py-1 border-b border-gray-200">
      <div className="text-[14px] py-[10px] pr-[150px] flex">
        <div className="text-white font-semibold pt-[2px] text-[11px] rounded-md bg-yellow-500 px-2 mr-2">
          TLSA
        </div>
        {name}
      </div>
      <div className="flex items-right space-x-16 justify-center">
        <div className="text-[15px] py-[7px] text-left">${currentPrice}</div>
        <div
          className={`text-[15px] py-[7px] px-1 font-semibold text-left rounded-lg bg-opacity-30  ${
            isUp ? "text-green-700" : "text-red-700"
          }`}
        >
          {isUp ? "+" : "-"}${priceChange}
        </div>
        <div
          className={`text-[13px] mt-[2px] text-green-700 font-semibold rounded-lg bg-opacity-30 flex flex-row  pt-[7px] ${
            isUp ? "bg-green-300 text-green-700" : "bg-red-300 text-red-700"
          }`}
        >
          <img
            src={isUp ? upArrowImg : downArrowImg}
            alt={isUp ? "Up Arrow" : "Down Arrow"}
            className="h-3 w-3 opacity-70"
          />
          {percentage}%
        </div>
      </div>
      <img className="h-6 w-6 mt-1 ml-3" src={AddCircle}></img>
    </li>
  );
};

export default MarketInterestBlock;
