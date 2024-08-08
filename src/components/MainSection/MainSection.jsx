import React from "react";
import MarketInterest from "./MarketInterest";
import CreatePorfolio from "./CreatePorfolio";
import MarketTrends from "./MarketTrends";
import BuildWatchlist from "./BuildWatchlist";
import EarningsCalender from "./EarningsCalender";
import FinancialNews from "./FinancialNews";

const MainSection = () => {
  return (
    <>
      <BuildWatchlist />
      <div className="flex justify-center">
        <div className="flex flex-col">
          <MarketInterest />
          <FinancialNews />
        </div>
        <div className="flex flex-col">
          <CreatePorfolio />
          <MarketTrends />
          <EarningsCalender />
        </div>
      </div>
    </>
  );
};

export default MainSection;
