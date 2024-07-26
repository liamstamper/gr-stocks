import React from "react";
import SearchLogo from "../../assets/icons/search.png";

const SearchBar = () => {
  return (
    <div className="flex justify-center">
      <input
        type="search"
        className="mt-[31px] border border-gray-200 shadow-md mx-auto rounded-full h-[62px] py-4 px-10 w-[555px] placeholder:text-gray-700 placeholder:pl-2 placeholder:text-[16px] text-black bg-[left_12px_center] bg-no-repeat bg-left-center"
        style={{
          fontFamily: "Roboto, sans-serif",
          fontWeight: 400,
          backgroundImage: `url(${SearchLogo})`,
          backgroundSize: "23px 23px",
        }}
        placeholder="Search for stocks, ETFs & more"
      />
    </div>
  );
};

export default SearchBar;
