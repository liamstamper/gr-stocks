import React from "react";
import createStockIcon from "./CreateStockIcon";
import { Link } from "react-router-dom";

const FinancialNewsBlock = ({
  snippet,
  date,
  source,
  thumbnail,
  stockTicker,
  changePercent,
  link,
}) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="border-b border-gray-200 pb-3">
        <div className="flex flex-col">
          <div className="flex flex-row text-xs ml-[2px] text-gray-600 font-medium pt-[10px]">
            <div>{source}</div>
            <div className="px-3">•</div>
            <div className="font-thin">{date}</div>
          </div>
          <div className="flex flex-row items-start mt-[10px] ">
            <div className="flex-1 text-gray-800 font-light">{snippet}</div>
            <img
              className="ml-[15px] w-[120px] h-[80px] bg-gray-200 rounded-lg"
              src={thumbnail}
            />
          </div>
          {stockTicker && (
            <button className="max-w-[100px] text-[10px] font-medium rounded-full px-[15px] py-[3px] border border-gray-300 text-gray-500 hover:bg-gray-100">
              <div className="flex justify-between">
                {stockTicker}
                <span>{changePercent}%</span>
              </div>
            </button>
          )}
        </div>
      </div>
    </a>
  );
};

export default FinancialNewsBlock;
