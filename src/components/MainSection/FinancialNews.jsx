import React, { useState } from "react";
import FinancialNewsBlock from "./FinancialNewsBlock";

const FinancialNews = () => {
  const [activeButton, setActiveButton] = useState("Top stories");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const buttonClasses = (buttonName) => {
    const baseClasses =
      "mr-[10px] text-[13px] font-medium rounded-full px-[15px] py-[6px] border border-gray-300";
    const activeClasses =
      "text-blue-600 bg-blue-300 bg-opacity-20 border-gray-300";
    const inactiveClasses = "text-gray-700 hover:bg-gray-100";

    return `${baseClasses} ${
      activeButton === buttonName ? activeClasses : inactiveClasses
    }`;
  };
  const article = [
    {
      snippet:
        "Update: “Wind changed quickly” during collision involving Venus and Lady Moura",
      source: "Boat International",
      thumbnail: "null",
      date: "July 30, 2024",
      link: "https://yahoo.com",
    },
    {
      snippet:
        "After approving the constitution of the Space NewCo, Indra strengthens its portfolio by acquiring Deimos",
      changePercentage: "15.30",
      stockTicker: "AAPL",
      source: "Tech Crunch",
      thumbnail: "null",
      date: "July 25, 2024",
      link: "https://yahoo.com",
    },
    {
      snippet:
        "Elon Musk's X taken to court in Ireland for grabbing EU user data to train Grok without consent",
      changePercentage: "10.75",
      stockTicker: "GOOG",
      source: "Ida Emp",
      thumbnail: "null",
      date: "July 20, 2024",
      link: "https://yahoo.com",
    },
  ];

  return (
    <div className="flex mb-[300px]">
      <div className="bg-white w-[660px] h-[335px]">
        <div className="border-b border-gray-200 pb-3">
          <h2 className="text-[18px] flex items-center text-gray-800 font-light mb-[15px]">
            Today's financial news
          </h2>
          <button
            className={buttonClasses("Top stories")}
            onClick={() => handleButtonClick("Top stories")}
          >
            Top stories
          </button>
          <button
            className={buttonClasses("Local market")}
            onClick={() => handleButtonClick("Local market")}
          >
            Local market
          </button>
          <button
            className={buttonClasses("World markets")}
            onClick={() => handleButtonClick("World markets")}
          >
            World markets
          </button>
        </div>
        {article.map((article, index) => (
          <FinancialNewsBlock
            key={index}
            snippet={article.snippet}
            changePercentage={article.changePercentage}
            stockTicker={article.stockTicker}
            date={article.date}
            source={article.source}
            link={article.link}
          />
        ))}
      </div>
    </div>
  );
};

export default FinancialNews;
