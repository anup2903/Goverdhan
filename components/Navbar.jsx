"use client";

import React, { useCallback, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { BiUserCircle, BiPhoneCall, BiSearch } from "react-icons/bi";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineMenu,
} from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const openWishList = () => {
    router.push("/Wishlist");
  };
  const openCartMenu = () => {
    router.push("/Cartmenu");
  };

  return (
    <div className="relative">
      <div className="flex justify-between gap-5 w-full p-2 w-[95vw] mx-auto my-[2px]">
        <div className="flex w-[25vw]">
          <CiLocationOn className=" cursor-pointer lg:w-[30px] lg:h-[30px] md:w-[25px] md:h-[25px] sm:w-[20px] sm:h-[20px] w-[18px] h-[18px] my-auto" />
          <h6 className="mx-[2px] lg:text-[20px] md:text-[15px] sm:text-[14px] text-[12px] my-auto">
            Home: Address
          </h6>
        </div>

        <div>
          <BiUserCircle
            className="cursor-pointer lg:w-[30px] lg:h-[30px] md:w-[25px] md:h-[25px] sm:w-[20px] sm:h-[20px] w-[18px] h-[18px] my-auto"
            onClick={toggleOpen}
          />
        </div>
      </div>
      <div className=" h-[2px] bg-black opacity-10" />

      <div className="flex justify-between gap-5 w-full px-[15px] w-[95vw] mx-auto my-[10px]">
        <div className="flex gap-2">
          <img
            src="/plant1.jpg"
            alt="plant photo"
            className="w-[32px] h-[30px] my-auto"
          />
          <h1 className="w-[143px] h-[38px] text-[28px] my-auto ">Goverdhan</h1>
        </div>

        <div className=" my-auto w-[30vw] border rounded-[7px] justify-between ">
          <div className="flex px-[5px] gap-2">
            <BiSearch className=" cursor-pointer lg:w-[25px] lg:h-[25px] md:w-[20px] md:h-[20px] sm:w-[15px] sm:h-[15px] w-[15px] h-[15px] my-auto" />
            <form className="">
              <input
                className="  w-[25vw] py-1  sm:px-1 sm:py-3  bg-white  rounded focus:outline-none   placeholder:text-zinc-400  text-black text-[18px]"
                placeholder="What are you looking for?"
              />
            </form>
          </div>
        </div>

        <div className="flex gap-1">
          <AiOutlineHeart
            className="cursor-pointer lg:w-[30px] lg:h-[30px] md:w-[25px] md:h-[25px] sm:w-[20px] sm:h-[20px] w-[18px] h-[18px] my-auto"
            onClick={openWishList}
          />
          <div className="w-[2px] h-[30px] bg-black opacity-20 my-auto" />
          <AiOutlineShoppingCart
            className="cursor-pointer lg:w-[30px] lg:h-[30px] md:w-[25px] md:h-[25px] sm:w-[20px] sm:h-[20px] w-[18px] h-[18px] my-auto"
            onClick={openCartMenu}
          />
          <div className="flex-col">
            <p className="text-[14px] flex">Shopping cart:</p>
            <p className="text-[16px] font-bold mx-auto"> ₹ 5000</p>
          </div>
        </div>
      </div>

      <div className="bg-[#333333] flex justify-between">
        
        <div className="flex my-auto">
          <AiOutlineMenu className="mx-[10px] text-white lg:w-[30px] lg:h-[30px] md:w-[25px] md:h-[25px] sm:w-[20px] sm:h-[20px] w-[18px] h-[18px] my-auto" />
          <span className="text-[22px] text-white flex">
            All Categories <RiArrowDropDownLine className="my-auto" />
          </span>

        </div>
        

        <div className="flex gap-3 text-white gap-12 mx-[10px] p-[4px]">
          <span className="text-[22px] flex">
            Home <RiArrowDropDownLine className="my-auto" />
          </span>
          <span className="text-[22px] flex">
            Shop <RiArrowDropDownLine className="my-auto" />
          </span>
          <span className="text-[22px] flex">
            {" "}
            Pages <RiArrowDropDownLine className="my-auto" />
          </span>
          <span className="text-[22px] flex">
            About Us <RiArrowDropDownLine className="my-auto" />
          </span>
          <span className="text-[22px] flex">
            Contact Us <RiArrowDropDownLine className="my-auto" />
          </span>
        </div>

        <div className="flex gap-3 text-white gap-1 mx-[10px] p-[4px]">
          <BiPhoneCall className="lg:w-[30px] lg:h-[30px] md:w-[25px] md:h-[25px] sm:w-[20px] sm:h-[20px] w-[18px] h-[18px] my-auto" />
          <p className="text-[16px] my-auto">+91 8826297740</p>
        </div>
      </div>

      <div>
        {isOpen && (
          <div className="w-[200px] bg-gray-50 shadow-xl rounded-lg flex flex-col overflow-hidden absolute top-12 right-5 z-20 ">
            <div className="flex flex-col items-center cursor-pointer">
              <p className=" py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                SignIn/SignUp
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
