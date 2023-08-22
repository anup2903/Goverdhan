"use client";

import React from "react";
import { CiLocationOn } from "react-icons/ci";
import {BiUserCircle } from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className="flex justify-between gap-5 w-full p-2 w-[95vw] mx-auto my-[2px]">
      <div className="flex w-[25vw]">
        <CiLocationOn className="cursor-pointer lg:w-[45px] lg:h-[45px] md:w-[40px] md:h-[40px] sm:w-[35px] sm:h-[35px] w-[30px] h-[30px]" />
        <h6 className="mx-[2px] lg:text-[24px] md:text-[18px] sm:text-[16px] text-[14px]">
          Home: Address
        </h6>
      </div>
      
      <div>
      <BiUserCircle className="cursor-pointer lg:w-[45px] lg:h-[45px] md:w-[40px] md:h-[40px] sm:w-[35px] sm:h-[35px] w-[30px] h-[30px]" />
      </div>
    </div>
  );
};

export default Navbar;
