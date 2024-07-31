import React from "react";
import MarketInterest from "./MarketInterest";
import CreatePorfolio from "./CreatePorfolio";
import MarketTrends from "./MarketTrends";

const MainSection = () => {
  return (
    <div className="flex justify-center">
      <MarketInterest
        name="Tesla Inc"
        percentage="21.50"
        priceChange="10.20"
        currentPrice="781.00"
        isUp={true}
      />
      <div className="flex flex-col">
        <CreatePorfolio />
        <MarketTrends />
      </div>
    </div>
  );
};

export default MainSection;
