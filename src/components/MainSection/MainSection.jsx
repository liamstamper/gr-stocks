import React from "react";
import MarketInterest from "./MarketInterest";
import CreatePorfolio from "./CreatePorfolio";

const MainSection = () => {
  return (
    <div className=" flex justify-center">
      <MarketInterest />
      <CreatePorfolio />
    </div>
  );
};

export default MainSection;
