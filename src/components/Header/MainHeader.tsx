"use client";
import React from "react";
import Image from "next/image";
import { FiSearch, FiShoppingCart, FiUser, FiUserPlus } from "react-icons/fi";
import { AiFillShop } from "react-icons/ai";

import logo from "../../../public/HednorLogo.png";
const MainHeader = () => {
  return (
    <div className="bg-white  py-2 px-6 flex items-center justify-between">
      {/* Left side: Logo and Search */}

      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold text-gray-800">
          <Image
            className="h-12 sm:h-16 w-auto"
            src={logo}
            alt="Hednor Logo"
            width={200}
            height={200}
            priority
          />
        </div>
      </div>

      {/* Right side: Cart, Account, Become Seller */}
      <div className="flex items-center space-x-8">
        <div className="relative w-96">
          <input
            type="text"
            placeholder="Search for Products, Brands and more"
            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
          />
          <FiSearch
            className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
            size={20}
          />
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <FiShoppingCart size={20} />
          <span className="hidden md:inline-block">Cart</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <FiUser size={20} />
          <span className="hidden md:inline-block">Account</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <AiFillShop size={20} />
          <span className="hidden md:inline-block">Become a Seller</span>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
