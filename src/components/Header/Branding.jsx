import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Branding = () => {
  return (
    <div className="flex items-center">
      {" "}
      <Link
        style={{ fontFamily: "Roboto, sans-serif", fontWeight: 400 }}
        to="/"
        className="text-xl font-semibold text-slate-500 tracking-wide flex"
      >
        <img alt="Logo" className="w-18 h-6 mr-2 mt-1" src={logo} />
        <span>Finance</span>
      </Link>
    </div>
  );
};

export default Branding;
