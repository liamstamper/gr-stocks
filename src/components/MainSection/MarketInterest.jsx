import React from "react";
import { Link } from "react-router-dom";
import InfoIcon from "../../assets/icons/info.png";
import AddCircle from "../../assets/icons/addcircle.png";

const MarketInterest = ({
  name,
  percentage,
  priceChange,
  currentPrice,
  isUp,
}) => {
  return (
    <div className="flex pt-[28px]">
      <div className="bg-white w-[640px] h-[335px] p-4">
        <h2 className="text-[18px] flex text-gray-800 mb-1 border-b pb-2 border-gray-200">
          You may be interested in
          <img class="ml-2 mt-1 w-4 h-4" src={InfoIcon}></img>
        </h2>
        <Link to="/stockpage/Tesla Inc">
          <li className="flex py-1 border-b border-gray-200">
            <div className="text-[14px] py-[7px] pr-[150px] flex">
              <div className="text-white font-semibold pt-[3px] text-[11px] rounded-md bg-red-600 px-2 mr-2">
                TLSA
              </div>
              {name}
            </div>
            <div className="flex items-right space-x-16">
              <div className="text-[15px] py-[7px] text-left">
                ${currentPrice}
              </div>
              <div
                className={`text-[15px] py-[7px] px-1 font-semibold text-left rounded-lg bg-opacity-30  ${
                  isUp ? "text-green-700" : "text-red-700"
                }`}
              >
                +${priceChange}
              </div>
              <div className="text-[15px] py-[7px] px-1 text-green-700 font-semibold text-left rounded-lg bg-opacity-30 bg-green-300">
                {percentage}%
              </div>
            </div>
            <img className="h-6 w-6 mt-1 ml-3" src={AddCircle}></img>
          </li>
        </Link>
        <a>
          <li className="flex py-2 border-b border-gray-200">
            <div className="text-[14px] py-[7px] pr-[150px] flex">
              <div className="text-white font-semibold pt-[3px] text-[11px] rounded-md bg-blue-800 px-2 mr-2">
                TLSA
              </div>
              Tesla Inc
            </div>
            <div className="flex items-right space-x-14">
              <div className="text-[15px] py-[7px] text-left">$182.20</div>
              <div className="text-[15px] py-[7px] text-green-700 text-left font-semibold">
                +$182.20
              </div>
              <div className="text-[15px] py-[7px] px-1 text-green-700 font-semibold text-left rounded-lg bg-opacity-30 bg-green-300">
                18.20%
              </div>
            </div>
            <img className="h-6 w-6 mt-1 ml-3" src={AddCircle}></img>
          </li>
        </a>
        <a>
          <li className="flex py-2 border-b border-gray-200">
            <div className="text-[14px] py-[7px] pr-[150px] flex">
              <div className="text-white font-semibold pt-[3px] text-[11px] rounded-md bg-black px-2 mr-2">
                TLSA
              </div>
              Tesla Inc
            </div>
            <div className="flex items-right space-x-14">
              <div className="text-[15px] py-[7px] text-left">$182.20</div>
              <div className="text-[15px] py-[7px] text-red-700 text-left font-semibold">
                +$182.20
              </div>
              <div className="text-[15px] py-[7px] px-1 text-red-700 font-semibold text-left rounded-lg bg-opacity-30 bg-red-300">
                18.20%
              </div>
            </div>
            <img className="h-6 w-6 mt-1 ml-3" src={AddCircle}></img>
          </li>
        </a>
        <a>
          <li className="flex py-2 border-b border-gray-200">
            <div className="text-[14px] py-[7px] pr-[150px] flex">
              <div className="text-black border border-black font-semibold pt-[3px] text-[11px] rounded-md bg-white px-2 mr-2">
                TLSA
              </div>
              Tesla Inc
            </div>
            <div className="flex items-right space-x-14">
              <div className="text-[15px] py-[7px] text-left">$182.20</div>
              <div className="text-[15px] py-[7px] text-red-700 text-left font-semibold">
                +$182.20
              </div>
              <div className="text-[15px] py-[7px] px-1 text-red-700 font-semibold text-left rounded-lg bg-opacity-30 bg-red-300">
                18.20%
              </div>
            </div>
            <img className="h-6 w-6 mt-1 ml-3" src={AddCircle}></img>
          </li>
        </a>
        <a>
          <li className="flex py-2 border-b border-gray-200">
            <div className="text-[14px] py-[7px] pr-[150px] flex">
              <div className="text-white font-semibold pt-[3px] text-[11px] rounded-md bg-orange-600 px-2 mr-2">
                TLSA
              </div>
              Tesla Inc
            </div>
            <div className="flex items-right space-x-14">
              <div className="text-[15px] py-[7px] text-left">$182.20</div>
              <div className="text-[15px] py-[7px] text-green-700 text-left font-semibold">
                +$182.20
              </div>
              <div className="text-[15px] py-[7px] px-1 text-green-700 font-semibold text-left rounded-lg bg-opacity-30 bg-green-300">
                18.20%
              </div>
            </div>
            <img className="h-6 w-6 mt-1 ml-3" src={AddCircle}></img>
          </li>
        </a>
      </div>
    </div>
  );
};

export default MarketInterest;
