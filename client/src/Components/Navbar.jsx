import React from "react";
import {
  HiOutlineShoppingCart,
  HiOutlineLocationMarker,
  HiSearch,
  HiOutlineLightningBolt,
  HiViewList,
  HiChevronDown,
  HiPhone,
  HiOutlineUser,
  HiOutlineHeart,
} from "react-icons/hi";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

export default function Navbar() {
  const loggedInUser = useSelector((state) => state.user?.user);

  return (
    <div className="flex flex-col ">
      {/* Upper navbar  */}
      <div className="flex flex-row justify-between items-center my-2">
        {/* Logo  */}
        <div>
          <h3 className="text-xl font-bold text-teal-700 font-sans cursor-pointer">
            Blip
            <span className="text-black">
              Kart<span className="text-teal-700">.</span>
            </span>
          </h3>
        </div>

        {/* Location  */}
        <div className="flex flex-row">
          <div className="flex flex-row items-center mr-4 space-x-2 border-2 rounded-md cursor-pointer">
            <div className="bg-gray-100 h-full p-2 ">
              <HiOutlineLocationMarker color="black" />
            </div>
            <div className="flex flex-row items-center space-x-1 px-1">
              <h5 className="text-teal-700 font-semibold text-sm ">
                Your Location
              </h5>
              <HiChevronDown color="black" />
            </div>
          </div>

          {/* SearchBar  */}
          <div className="flex flex-row items-center justify-center">
            <input
              type="text"
              placeholder="I'm looking for..."
              className="outline-none text-slate-600 border rounded-l-md border-y-2 border-l-2 font-semibold text-sm py-2 px-2 w-[35rem]"
            />
            <div className="p-3 bg-yellow-500 h-full cursor-pointer rounded-r-md">
              <HiSearch color="white" />
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-4 items-center ">
          {/* Delivery Mobile No.  */}
          <div className="flex flex-row items-center space-x-1 cursor-pointer">
            <HiPhone size={"16px"} />
            <div className="flex flex-col -space-y-1">
              <p className="text-[8px] text-gray-700 font-semibold">
                24x7 Delivery
              </p>
              <h6 className="text-[12px] font-bold text-gray-800">
                +91 8739925438
              </h6>
            </div>
          </div>

          {/* Wishlist  */}
          <div className="cursor-pointer border-r-2 px-2 border-l-2">
            <HiOutlineHeart size={"20px"} color="gray" />
          </div>

          {/* Cart  */}
          <div className="cursor-pointer border-r-2 pr-2">
            <HiOutlineShoppingCart size={"20px"} color="gray" />
          </div>

          {/* User Account  */}
          {loggedInUser ? (
            <div className="flex flex-row items-center space-x-1 cursor-pointer">
              <HiOutlineUser size={"16px"} />
              <div className="flex flex-col -space-y-1">
                <p className="text-[8px] text-gray-700 font-semibold">Hello</p>
                <h2 className="text-[12px] font-bold text-gray-800">
                  {loggedInUser.userName}
                </h2>
              </div>
            </div>
          ) : (
            <Link
              className="flex flex-row items-center space-x-1 cursor-pointer"
              to={"/login"}
            >
              <HiOutlineUser size={"16px"} />
              <div className="flex flex-col -space-y-1">
                <p className="text-[8px] text-gray-700 font-semibold">Hello</p>
                <h2 className="text-[12px] font-bold text-gray-800">
                  My Account
                </h2>
              </div>
            </Link>
          )}
          {loggedInUser?.isSeller ? (
            <Link
            className="flex flex-row items-center space-x-1 cursor-pointer border-2 border-teal-700 py-2 px-4 rounded-md "
            to={"/seller/6544565"}
          >
            <div className="flex flex-col -space-y-1">
              <h2 className="text-[12px] font-bold text-teal-700">
                Manage Seller Account
              </h2>
            </div>
          </Link>
          ) : (
            <Link
              className="flex flex-row items-center space-x-1 cursor-pointer border-2 border-teal-700 py-2 px-4 rounded-md "
              to={"/seller/register"}
            >
              <div className="flex flex-col -space-y-1">
                <h2 className="text-[12px] font-bold text-teal-700">
                  Become a Seller
                </h2>
              </div>
            </Link>
          )}
        </div>
      </div>

      {/* Lower Navbar  */}
      <div className="flex felx-row justify-between items-center">
        <div className="flex flex-row items-center py-1 px-5 bg-teal-600 text-white justify-center space-x-2 rounded-sm cursor-pointer">
          <HiViewList />
          <h4 className="font-semibold text-sm ">All Categories</h4>
        </div>
        <ul className="flex flex-row space-x-4 ">
          <li className="flex flex-row items-center text-sm font-semibold hover:text-teal-700 cursor-pointer ">
            Home <HiChevronDown />
          </li>
          <li className="flex flex-row items-center text-sm font-semibold hover:text-teal-700 cursor-pointer ">
            Shop <HiChevronDown />
          </li>
          <li className="flex flex-row items-center text-sm font-semibold hover:text-teal-700 cursor-pointer ">
            Product <HiChevronDown />
          </li>
          <li className="flex flex-row items-center text-sm font-semibold hover:text-teal-700 cursor-pointer ">
            Mega Menu <HiChevronDown />
          </li>
          <li className="flex flex-row items-center text-sm font-semibold hover:text-teal-700 cursor-pointer ">
            Blog <HiChevronDown />
          </li>
          <li className="flex flex-row items-center text-sm font-semibold hover:text-teal-700 cursor-pointer ">
            Pages <HiChevronDown />
          </li>
          <li className="flex flex-row items-center text-sm font-semibold hover:text-teal-700 cursor-pointer ">
            Seller <HiChevronDown />
          </li>
        </ul>
        <div className="flex flex-row items-center py-2 px-5 bg-teal-100 text-teal-900 cursor-pointer space-x-1">
          <HiOutlineLightningBolt />
          <h5 className="text-xs font-bold ">Deal Today</h5>
        </div>
      </div>
    </div>
  );
}
