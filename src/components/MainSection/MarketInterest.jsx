import React from "react";
import InfoIcon from "../../assets/icons/info.png";
import MarketInterestBlock from "./MarketInterestBlock";

const MarketInterest = () => {
  const stocks = [
    {
      name: "Tesla Inc",
      percentage: "21.50",
      priceChange: "10.20",
      currentPrice: "781.00",
      isUp: true,
    },
    {
      name: "Apple Inc",
      percentage: "15.30",
      priceChange: "8.15",
      currentPrice: "152.10",
      isUp: false,
    },
    {
      name: "Google LLC",
      percentage: "10.75",
      priceChange: "5.00",
      currentPrice: "2792.35",
      isUp: true,
    },
    // Add more stock data as needed
  ];

  return (
    <div className="flex pt-[28px]">
      <div className="bg-white w-[660px] h-[335px]">
        <h2 className="text-[18px] flex items-center text-gray-800 mb-1 border-b pb-2 border-gray-200">
          You may be interested in
          <img className="ml-2 mt-1 w-4 h-4" src={InfoIcon} alt="Info Icon" />
        </h2>
        {stocks.map((stock, index) => (
          <MarketInterestBlock
            key={index}
            name={stock.name}
            percentage={stock.percentage}
            priceChange={stock.priceChange}
            currentPrice={stock.currentPrice}
            isUp={stock.isUp}
          />
        ))}
      </div>
    </div>
  );
};

export default MarketInterest;
