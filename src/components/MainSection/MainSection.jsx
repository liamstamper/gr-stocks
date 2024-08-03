import React from "react";
import MarketInterest from "./MarketInterest";
import CreatePorfolio from "./CreatePorfolio";
import MarketTrends from "./MarketTrends";

const MainSection = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col">
        <MarketInterest />
      </div>
      <div className="flex flex-col">
        <CreatePorfolio />
        <MarketTrends />
      </div>
    </div>
  );
};

export default MainSection;
