import React, { useState } from "react";
import MarketCard from "./MarketCard";

const MarketsCards = () => {
  const [markets] = useState([
    {
      id: 1,
      name: "Dow Futures",
      percentage: "+0.20",
      priceChange: "+$81.00",
      currentPrice: "$40,774.00",
      isUp: true,
    },
    {
      id: 2,
      name: "S&P Futures",
      percentage: "+0.25",
      priceChange: "+$13.75",
      currentPrice: "$5,624.50",
      isUp: true,
    },
    {
      id: 3,
      name: "Nasdaq Futures",
      percentage: "+0.17",
      priceChange: "+$34.00",
      currentPrice: "$20,035.00",
      isUp: true,
    },
    {
      id: 4,
      name: "Gold",
      percentage: "+0.50",
      priceChange: "+$12.30",
      currentPrice: "$2,454.40",
      isUp: true,
    },
    {
      id: 5,
      name: "Crude Oil",
      percentage: "-2.45",
      priceChange: "-$1.92",
      currentPrice: "$76.48",
      isUp: false,
    },
  ]);

  return (
    <div className="flex space-x-2 flex-wrap mt-2">
      {markets.map((market) => (
        <MarketCard
          key={market.id}
          name={market.name}
          percentage={market.percentage}
          priceChange={market.priceChange}
          currentPrice={market.currentPrice}
          isUp={market.isUp}
        />
      ))}
    </div>
  );
};

export default MarketsCards;
