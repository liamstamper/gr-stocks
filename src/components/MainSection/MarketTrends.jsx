import StackedLineIcon from "../../assets/icons/market-trend/stackedlines.png";
import GraphIcon from "../../assets/icons/market-trend/grapher.png";
import GainIcon from "../../assets/icons/market-trend/gainer.png";
import LoseIcon from "../../assets/icons/market-trend/loser.png";
import LeafIcon from "../../assets/icons/market-trend/leaf.png";
import MoneyIcon from "../../assets/icons/market-trend/money.png";
import CryptoIcon from "../../assets/icons/market-trend/crypto.png";

const MarketTrends = () => {
  return (
    <div className="w-[360px] h-[175px] ml-[10px] mt-[25px] border border-gray-200 rounded-xl justify-center text-center p-[15px]">
      <div
        className="text-gray-900 text-left text-[17px] pb-[10px]"
        style={{ fontFamily: "Roboto, sans-serif", fontWeight: 400 }}
      >
        Market Trends
      </div>
      <div className="flex flex-row space-x-2">
        <button className="mt-2 flex items-center hover:bg-gray-50 justify-center space-x-2 rounded-full text-[11px] text-gray-600 px-2 py-1 border border-gray-200 flex-row">
          <img className="h-[18px] w-[18px] pr-1" src={StackedLineIcon}></img>
          Market indexes
        </button>
        <button className="mt-2 flex items-center hover:bg-gray-50 justify-center space-x-2 rounded-full text-[11px] text-gray-600 px-2 py-1 border flex-row border-gray-200">
          <img className="h-[18px] w-[18px] pr-1" src={GraphIcon}></img>
          Most Active
        </button>
      </div>
      <div className="flex flex-row space-x-2">
        <button className="mt-2 flex flex-row items-center hover:bg-gray-50 justify-center space-x-2 rounded-full text-[11px] text-gray-600 px-2 py-1 border border-gray-200">
          <img className="h-[18px] w-[18px] pr-1" src={GainIcon}></img>
          Gainers
        </button>
        <button className="mt-2 flex flex-row items-center hover:bg-gray-50 justify-center space-x-2 rounded-full text-[11px] text-gray-600 px-2 py-1 border border-gray-200">
          <img className="h-[18px] w-[18px] pr-1" src={LoseIcon}></img>
          Losers
        </button>
        <button className="mt-2 flex flex-row items-center hover:bg-gray-50 justify-center space-x-2 rounded-full text-[11px] text-gray-600 px-2 py-1 border border-gray-200">
          <img className="h-[16px] w-[20px] pr-1" src={LeafIcon}></img>
          Climate Leaders
        </button>
      </div>
      <div className="flex flex-row space-x-2">
        <button className="mt-2 flex items-center hover:bg-gray-50 justify-center space-x-2 rounded-full text-[11px] text-gray-600 px-2 py-1 border border-gray-200">
          <img className="h-[16px] w-[20px] pr-1" src={CryptoIcon}></img>
          Crypto
        </button>
        <button className="mt-2 flex flex-row items-center hover:bg-gray-50 justify-center space-x-2 rounded-full text-[11px] text-gray-600 px-2 py-1 border border-gray-200">
          <img className="h-[14px] w-[19px] pr-1" src={MoneyIcon}></img>
          Currencies
        </button>
      </div>
    </div>
  );
};

export default MarketTrends;
