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
      ticker: "TSLA",
    },
    {
      name: "Apple Inc",
      percentage: "15.30",
      priceChange: "8.15",
      currentPrice: "152.10",
      isUp: false,
      ticker: "AAPL",
    },
    {
      name: "Google LLC",
      percentage: "10.75",
      priceChange: "5.00",
      currentPrice: "2792.35",
      isUp: true,
      ticker: "GOOG",
    },
    {
      name: "Disney LLC",
      percentage: "10.75",
      priceChange: "5.00",
      currentPrice: "2792.35",
      isUp: true,
      ticker: "DIS",
    },
    {
      name: "Nasdaq-100",
      percentage: "10.75",
      priceChange: "5.00",
      currentPrice: "2792.35",
      isUp: true,
      ticker: "INDEX",
    },
  ];

  return (
    <div className="flex pt-[28px]">
      <div className="bg-white w-[660px] h-[335px]">
        <h2 className="text-[18px] flex items-center text-gray-800 pb-2 border-b border-gray-200">
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
            ticker={stock.ticker}
          />
        ))}
      </div>
    </div>
  );
};

export default MarketInterest;
