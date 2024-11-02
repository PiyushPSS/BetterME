import React, { useState, useEffect } from "react";

import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { CompanyName } from "../data";

const Header = () => {
  const [isHeader, setIsHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 36 ? setIsHeader(true) : setIsHeader(false);
    });
  });
  return (
    <header
      className={`${isHeader ? "top-0" : "top-9"
        } fixed bg-white w-full max-w-[90vw] lg:max-w-[1170px] mx-auto rounded-md h-[90px] shadow-primary px-4 lg:px-8 z-20 transition-all
      duration-500 flex items-center justify-between`}>
      <div className="flex items-center">
        <a href="#">
          {/* This is where the company logo is shown at the top nav bar. (on the left side before the menu items.) */}
          {/* <img src={Logo} alt="" /> */}
          <h1 className="font-bold text-xl align-middle">{CompanyName}</h1>
        </a>
        <div className="hidden lg:flex">
          <Nav />
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex gap-x-4 lg:gap-x-9">
          {/* This contains the sign in and create account button shown on the nav bar. */}
          <button className="text-heading font-medium text-sm lg:text-base hover:text-[#ff6f61] transition">
            Sign In
          </button>
          <button className="bg-[#ff6f61] btn btn-md lg:px-[30px] border text-white font-medium text-sm lg:text-base hover:bg-[#000] hover:text-white transition rounded-md">
            Create Account
          </button>
        </div>
        <NavMobile />
      </div>
    </header>
  );
};

export default Header;
