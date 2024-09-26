import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar";
import Markets from "./components/MarketsSection/Markets";
import MarketTrends from "./components/MainSection/MarketTrends";
import PlusIcon from "./assets/icons/plus.png";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data1 = {
  labels: labels,
  datasets: [
    {
      label: "Stock Price",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(100,100,100)",
      tension: 0.1,
    },
  ],
};

const StockPage = () => {
  const { sectionId } = useParams();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      {isSidebarOpen && <SideBar toggleSidebar={toggleSidebar} />}
      <div className="flex flex-col items-center bg-gray-100 pb-6">
        <Markets />
      </div>

      {/* Stock Section Header */}
      <div className="max-w-[1025px] w-full flex flex-row justify-between pt-5 mx-auto pb-1 border-b">
        <div className="text-[24px] font-roboto">{sectionId}</div>
        <div className="space-x-3 pb-2 text-sm">
          <button className="bg-white border border-gray-300 rounded-full px-4 py-2 shadow-md">
            <div>Follow</div>
          </button>
          <button className="bg-white border border-gray-300 rounded-full px-4 py-2 shadow-md">
            Share
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1025px] w-full mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Side: Stock Chart */}
        <div className="col-span-2 p-6 ">
          <Line data={data1} />
        </div>

        {/* Right Side: Stock Details */}
        <div className="p-6 rounded-lg border border-gray-200">
          <ul className="text-sm space-y-2">
            <li className="border-b border-gray-200 pb-3">
              <button className="mt-2 flex items-center bg-gray-100 justify-center space-x-2 rounded-full text-[11px] text-gray-600 px-3 py-1 border border-gray-200 flex-row">
                Stock
              </button>
            </li>
            <li className="border-b border-gray-200 py-2 flex flex-row justify-between">
              <div className="uppercase font-medium text-gray-600 text-[11px]">
                Previous Close:
              </div>
              <div className="font-medium text-[13px]">$10.87</div>
            </li>
            <li className="border-b border-gray-200 py-3 flex flex-row justify-between">
              <div className="uppercase font-medium text-gray-600 text-[11px]">
                Day Range:
              </div>
              <div className="font-medium text-[13px]">$10.32 - $10.59</div>
            </li>
            <li className="border-b border-gray-200 py-3 flex flex-row justify-between">
              <div className="uppercase font-medium text-gray-600 text-[11px]">
                Year Range:
              </div>
              <div className="font-medium text-[13px]">$9.49 - $14.85</div>
            </li>
            <li className="border-b border-gray-200 py-3 flex flex-row justify-between">
              <div className="uppercase font-medium text-gray-600 text-[11px]">
                Market Cap:
              </div>
              <div className="font-medium text-[13px]">41.42B USD</div>
            </li>
            <li className="border-b border-gray-200 py-3 flex flex-row justify-between">
              <div className="uppercase font-medium text-gray-600 text-[11px]">
                Avg Volume:
              </div>
              <div className="font-medium text-[13px]">46.43M</div>
            </li>
            <li className="border-b border-gray-200 py-3 flex flex-row justify-between">
              <div className="uppercase font-medium text-gray-600 text-[11px]">
                P/E Ratio:
              </div>
              <div className="font-medium text-[13px]">10.96</div>
            </li>
            <li className="border-b border-gray-200 py-3 flex flex-row justify-between">
              <div className="uppercase font-medium text-gray-600 text-[11px]">
                Dividend Yield:
              </div>
              <div className="font-medium text-[11px]">5.76%</div>
            </li>
            <li className=" py-3 flex flex-row justify-between">
              <div className="uppercase font-medium text-gray-600 text-[11px]">
                Primary Exchange:
              </div>
              <div className="font-medium text-[13px]">NYSE</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default StockPage;
