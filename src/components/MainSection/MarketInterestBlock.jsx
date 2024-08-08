import React from "react";
import { Link } from "react-router-dom";
import InfoIcon from "../../assets/icons/info.png";
import AddCircle from "../../assets/icons/addcircle.png";
import upArrowImg from "../../assets/icons/uparrow.png";
import downArrowImg from "../../assets/icons/downarrow.png";
import createStockIcon from "./CreateStockIcon";

const MarketInterestBlock = ({
  name,
  percentage,
  priceChange,
  currentPrice,
  isUp,
  ticker,
  hasBorder = true,
}) => {
  return (
    <Link to={`/stockpage/${name}`} className="block">
      <li
        className={`flex items-center py-[8px] ${
          hasBorder ? "border-b border-gray-200" : ""
        } hover:bg-gray-50`}
      >
        <div className="flex-1 flex items-center">
          <div>{createStockIcon(ticker)}</div>
          <span className="text-[14px]">{name}</span>
        </div>
        <div className="flex-1 text-[15px] flex items-center justify-between">
          <div>${currentPrice}</div>
          <div
            className={`font-semibold rounded-lg py-1 px-2 ${
              isUp ? "text-green-700" : " text-red-700"
            }`}
          >
            {isUp ? "+" : "-"}${priceChange}
          </div>
          <div
            className={`flex text-[15px] font-semibold items-center py-1 px-2 bg-opacity-30 rounded-lg ${
              isUp ? "bg-green-300 text-green-700" : "bg-red-300 text-red-700"
            }`}
          >
            <img
              src={isUp ? upArrowImg : downArrowImg}
              alt={isUp ? "Up Arrow" : "Down Arrow"}
              className="h-3 w-3 opacity-70 mr-1"
            />
            {percentage}%
          </div>
        </div>
        <img className="h-6 w-6 ml-3" src={AddCircle} alt="Add Circle" />
      </li>
    </Link>
  );
};

export default MarketInterestBlock;
