import React from "react";
import { Link } from "react-router-dom";
import InfoIcon from "../../assets/icons/info.png";
import AddCircle from "../../assets/icons/addcircle.png";
import upArrowImg from "../../assets/icons/uparrow.png";
import downArrowImg from "../../assets/icons/downarrow.png";
import MarketInterestBlock from "./MarketInterestBlock";

const MarketInterest = ({}) => {
  return (
    <div className="flex pt-[28px]">
      <div className="bg-white w-[640px] h-[335px] p-4">
        <h2 className="text-[18px] flex text-gray-800 mb-1 border-b pb-2 border-gray-200">
          You may be interested in
          <img class="ml-2 mt-1 w-4 h-4" src={InfoIcon}></img>
        </h2>
        <Link to={`/stockpage/${name}`}>
          <MarketInterestBlock
            name="Tesla Inc"
            percentage="21.50"
            priceChange="10.20"
            currentPrice="781.00"
            isUp={true}
          />
          <MarketInterestBlock
            name="Tesla Inc"
            percentage="21.50"
            priceChange="10.20"
            currentPrice="781.00"
            isUp={true}
          />
          <MarketInterestBlock
            name="Tesla Inc"
            percentage="21.50"
            priceChange="10.20"
            currentPrice="781.00"
            isUp={true}
          />
          <MarketInterestBlock
            name="Tesla Inc"
            percentage="21.50"
            priceChange="10.20"
            currentPrice="781.00"
            isUp={true}
          />
          <MarketInterestBlock
            name="Tesla Inc"
            percentage="21.50"
            priceChange="10.20"
            currentPrice="781.00"
            isUp={false}
          />
        </Link>
      </div>
    </div>
  );
};

export default MarketInterest;
