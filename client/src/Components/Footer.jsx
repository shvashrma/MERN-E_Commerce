import React from "react";
import { HiOutlineHome, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-black/5 w-full items-center flex flex-col">
      <div className="w-[80%]">
        {/* Upper Footer  */}
        <div className="flex flex-row py-8 border-b-2 justify-between ">
          <div className="border-r-2">
            <h4 className="pr-12 font-bold text-gray-600  text-sm">
              Every Fresh Products
            </h4>
          </div>
          <div className="border-r-2">
            <h4 className="pr-12 font-bold text-gray-600  text-sm cursor-pointer">
              Free Delivery For Order Over $50
            </h4>
          </div>
          <div className="border-r-2">
            <h4 className="pr-12 font-bold text-gray-600 text-sm cursor-pointer">
              Daily Mega Discounts
            </h4>
          </div>
          <div>
            <h4 className="pr-12 font-bold text-gray-600  text-sm cursor-pointer">
              Best Price on the Market
            </h4>
          </div>
        </div>

        {/* Middle Footer  */}
        <div className="flex flex-row justify-between py-12 border-b-2">
          {/* First Section */}
          <div className="flex flex-col space-y-2 w-[20%]">
            <h2 className="text-2xl font-bold text-teal-700 ">
              Blip<span className="text-black">Kart</span>
              <span className="text-teal-700">.</span>
            </h2>
            <p className="flex-wrap inline text-gray-600 text-sm font-semibold pb-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
              blanditiis fugiat nesciunt totam alias assumenda nam velit odio
              voluptates eius?
            </p>
            <div className="flex flex-col space-y-1">
              <div className="flex flex-row space-x-2">
                <HiOutlineHome color="gray" />
                <h6 className="text-gray-600 text-xs font-bold">
                  1418 riverwood Drive, CA 96052,US
                </h6>
              </div>
              <div className="flex flex-row space-x-2">
                <HiOutlineMail color="gray" />
                <h6 className="text-gray-600 text-xs font-bold">
                  support@fastkart.com
                </h6>
              </div>
            </div>
          </div>

          {/* Second Section */}
          <div className="space-y-4 ">
            <h1 className="text-md font-bold text-black/80">Categories</h1>
            <ul className="space-y-2 text-gray-600 text-sm font-semibold">
              <li>Vegetables & Fruits</li>
              <li>Beverages</li>
              <li>Meats & SeaFoods</li>
              <li>Frozen Foods</li>
              <li>Biscuits & Snacks</li>
              <li>Grocery & Supplies</li>
            </ul>
          </div>
          <div className="space-y-4 ">
            <h1 className="text-md font-bold text-black/80">Useful Links</h1>
            <ul className="space-y-2 text-gray-600 text-sm font-semibold cursor-pointer">
              <li>Home</li>
              <li>Beverages</li>
              <li>Shop</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="space-y-4 ">
            <h1 className="text-md font-bold text-black/80">Help Center</h1>
            <ul className="space-y-2 text-gray-600 text-sm font-semibold">
              <li>Your Orders</li>
              <li>Your Accounts</li>
              <li>Track Order</li>
              <li>Your Wishlist</li>
              <li>Search</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h1 className="text-md font-bold text-black/80">Contact Us</h1>
            <div className="flex flex-row space-x-2 border-b-2 pb-6">
              <HiOutlinePhone size={"20px"} />
              <div className="flex flex-col">
                <p className="text-[10px] text-gray-700 font-semibold">
                  Helpline 24x7
                </p>
                <h3 className="text-[12px] font-bold text-gray-800">
                  +91 8739925438
                </h3>
              </div>
            </div>
            <div className="flex flex-row space-x-2 border-b-2 pb-6 ">
              <HiOutlineMail size={"20px"} />
              <div className="flex flex-col">
                <p className="text-[10px] text-gray-700 font-semibold">
                  Email Address:
                </p>
                <h3 className="text-[12px] font-bold text-gray-800">
                  blipkart@gmail.com
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/* Lower Footer  */}
        <div className="flex flex-row justify-between py-6">
          <p className="text-xs font-bold text-black/60 cursor-pointer">
            2023 BlipKart@India. All rights reserved
          </p>
          <div className="flex flex-row space-x-2 items-center ">
            <p className="text-xs font-bold text-black/60 ">Stay Connected:</p>
            <ul className="flex flex-row space-x-3 ">
              <li>
                <FaFacebook size={"12px"} color="gray" cursor={"pointer"} />
              </li>
              <li>
                <FaInstagram size={"12px"} color="gray" cursor={"pointer"} />
              </li>
              <li>
                <FaTwitter size={"12px"} color="gray" cursor={"pointer"} />
              </li>
              <li>
                <FaPinterest size={"12px"} color="gray" cursor={"pointer"} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
