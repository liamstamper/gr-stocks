import React from "react";
import SigninButton from "../../components/Header/SignInButton";
import ListIcon from "../../assets/icons/list.png";

const BuildWatchlist = () => {
  return (
    <div className="max-w-[1025px] h-[60px] w-full flex flex-row  items-center mt-[30px] mx-auto rounded-xl border border-gray-300 ">
      <div className="w-full flex flex-row">
        <img className="ml-4 mt-[6px] h-7 w-6" src={ListIcon}></img>
        <div className="pl-6">
          <div className="text-[13px] font-semibold">Build a watchlist</div>
          <div className="text-[12px] text-gray-500">
            Sign in to track investments you care about
          </div>
        </div>
        <div className="ml-auto pr-[15px]">
          <SigninButton />{" "}
        </div>
      </div>
    </div>
  );
};

export default BuildWatchlist;
