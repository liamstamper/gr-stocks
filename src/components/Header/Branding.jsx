import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Branding = () => {
  return (
    <div className="flex items-center">
      {" "}
      <Link to="/" className="flex">
        <img alt="Logo" className="w-[75px] h-6 mr-[4px] mt-[7px]" src={logo} />
        <span className="text-[21px] mt-[2px] font-roboto text-slate-500">
          Finance
        </span>
      </Link>
    </div>
  );
};

export default Branding;
