import React from "react";

const colorClasses = [
  "bg-red-600 text-white",
  "border border-black text-black",
  "bg-green-700 text-white",
  "bg-yellow-600 text-white",
  "bg-blue-800 text-white",
];

const getColorIndex = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash % colorClasses.length);
};

const createStockIcon = (ticker) => {
  const bgColor = colorClasses[getColorIndex(ticker)];

  return (
    <div
      className={` font-semibold text-[11px] rounded-md px-2 py-[2px] mr-2 ${bgColor} `}
    >
      {ticker}
    </div>
  );
};

export default createStockIcon;
