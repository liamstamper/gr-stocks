import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExpandAllIcon from "../../assets/icons/expandall.png";
import CollapseAllIcon from "../../assets/icons/collapseall.png";
import MarketsCards from "./MarketsCards";

const Markets = () => {
  const [activeMarket, setActiveMarket] = useState("US");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMarketClick = (market) => {
    setActiveMarket(market);
  };

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  const getButtonClasses = (market) =>
    `text-sm rounded-full px-3 py-[2px] ml-2 ${
      market === activeMarket
        ? "text-blue-600 bg-blue-300 bg-opacity-20"
        : "text-gray-600 hover:bg-gray-100"
    }`;

  return (
    <div className="max-w-[1025px] flex flex-col w-full h-[90px] pt-[16px]">
      <div className="flex items-center space-x-2 text-xs">
        <button
          className="uppercase text-gray-600 flex tracking-wider font-semibold text-[8px] lg:text-[11px]"
          onClick={handleExpandClick}
        >
          <img
            className="h-4 w-4 mr-1"
            src={isExpanded ? CollapseAllIcon : ExpandAllIcon}
            alt={isExpanded ? "Collapse All Icon" : "Expand All Icon"}
          />
          Compare Markets
        </button>
        {["US", "Europe", "Asia", "Currencies", "Crypto", "Futures"].map(
          (market) => (
            <button
              key={market}
              className={getButtonClasses(market)}
              onClick={() => handleMarketClick(market)}
            >
              {market}
            </button>
          )
        )}
        <div className="border-l-2 border-gray-400 h-5 ml-2 pr-3"></div>
        <a
          className="text-sm text-gray-800 font-semibold text-[13px] hover:underline"
          href="#"
        >
          Stock Market News: <Link to="/aboutpage">About This Project!</Link>
        </a>
      </div>
      <MarketsCards />
    </div>
  );
};

export default Markets;
