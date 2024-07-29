import React from "react";
import InfoIcon from "../../assets/icons/info.png";

const MarketInterest = () => {
  return (
    <div className="flex  pt-[28px]">
      <div className="bg-white w-[640px] h-[335px] p-4">
        <h2 className="text-[18px] pb-2 flex text-gray-800 mb-1 border-b border-spacing-y-3 border-gray-200">
          You may be interested in
          <img class="ml-2 mt-1 w-4 h-4" src={InfoIcon}></img>
        </h2>
        <ul>
          <li className="flex text-[14px] justify-between items-center py-3 border-b border-gray-200">
            <span>Amazon.com Inc</span>
            <span>$182.20</span>
          </li>
          <li className="flex text-[14px] justify-between items-center py-3 border-b border-gray-200">
            <span>Amazon.com Inc</span>
            <span>$182.20</span>
          </li>
          <li className="flex text-[14px] justify-between items-center py-3 border-b border-gray-200">
            <span>Amazon.com Inc</span>
            <span>$182.20</span>
          </li>
          <li className="flex text-[14px] justify-between items-center py-3 border-b border-gray-200">
            <span>Amazon.com Inc</span>
            <span>$182.20</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MarketInterest;
