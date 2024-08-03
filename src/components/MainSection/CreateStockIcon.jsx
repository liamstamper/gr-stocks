import React from "react";

const colorClasses = [
  "bg-red-600",
  "bg-blue-800",
  "bg-green-600",
  "bg-yellow-500",
  "bg-orange-600",
  "bg-teal-600",
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
      className={`text-white font-semibold text-[11px] rounded-md px-2 py-1 mr-2 ${bgColor} `}
    >
      {ticker}
    </div>
  );
};

export default createStockIcon;
