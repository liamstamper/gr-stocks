import React from "react";
import ExpandAllIcon from "../../assets/icons/expandall.png";

const Markets = () => {
  return (
    <div className="max-w-[1025px] flex flex-col w-full h-[90px] pt-[16px]">
      <div className="flex items-center space-x-2 text-xs">
        <img className="h-3 w-3" src={ExpandAllIcon} alt="Expand All Icon" />
        <button className="uppercase text-gray-600 tracking-wider font-semibold text-[11px]">
          Compare Markets
        </button>
        <button className="text-blue-700 ml-2 text-sm rounded-full bg-blue-300 bg-opacity-40 px-3 py-1">
          Futures
        </button>
        <button className="text-gray-600 ml-2 text-sm rounded-full active:text-blue-700 hover:bg-blue-300 bg-opacity-40 px-3 py-1">
          US
        </button>
        <button className="text-gray-600 ml-2 text-sm rounded-full active:text-blue-700 hover:bg-blue-300 bg-opacity-40 px-3 py-1">
          Europe
        </button>
        <button className="text-gray-600 ml-2 text-sm rounded-full active:text-blue-700 hover:bg-blue-300 bg-opacity-40 px-3 py-1">
          Asia
        </button>
        <button className="text-gray-600 ml-2 text-sm rounded-full active:text-blue-700 hover:bg-blue-300 bg-opacity-40 px-3 py-1">
          Currencies
        </button>
        <button className="text-gray-600 ml-2 text-sm rounded-full active:text-blue-700 hover:bg-blue-300 bg-opacity-40 px-3 py-1">
          Crypto
        </button>
      </div>
    </div>
  );
};

export default Markets;
