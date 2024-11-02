import React from "react";

import { FaYoutube, FaInstagram, FaGithub } from "react-icons/fa";
import { CompanyName } from "../data";

const Footer = () => {
  return (
    <footer className="pb-[70px]" data-aos="fade-up">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between items-center lg:flex-row gap-y-5">
          <a href="#">
            <h1 className="font-bold text-xl align-middle">{CompanyName}</h1>
          </a>
          <p>&copy; 2024, All rights reserved.</p>
          <div className="flex gap-x-4 text-orange text-lg">
            <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-primary cursor-pointer hover:text-paragraph transition">
              <FaYoutube />
            </div>
            <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-primary cursor-pointer hover:text-paragraph transition">
              <FaInstagram />
            </div>
            <div className="w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-primary cursor-pointer hover:text-paragraph transition">
              <FaGithub />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
