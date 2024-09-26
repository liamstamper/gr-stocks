import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Branding = () => {
  return (
    <div className="flex items-center">
      {" "}
      <Link to="/" className="flex">
        <img
          alt="Logo"
          className="w-[75px] h-[25px] mr-[4px] mt-[6px]"
          src={logo}
        />
        <span className="text-[21px] mt-[px] font-roboto text-slate-500">
          Finance
        </span>
      </Link>
    </div>
  );
};

export default Branding;
