import React from "react";
import logo from "../../assets/logo.png";

const Branding = () => {
  return (
    <div className="flex items-center">
      {" "}
      <img alt="Logo" className="w-18 h-6 mr-2 mt-1" src={logo} />
      <a
        style={{ fontFamily: "Roboto, sans-serif", fontWeight: 400 }}
        href="#"
        className="text-xl font-semibold text-slate-500 tracking-wide"
      >
        Finance
      </a>
    </div>
  );
};

export default Branding;
