import React from "react";
import peanutButter from "../../../Assets/Images/Product-1.webp";
import { HiPlusSm, HiOutlineStar } from "react-icons/hi";

export default function SearchedProduct() {
  return (
    <div className="flex flex-col bg-black/5 items-center w-[12rem] h-auto min-h-[18rem] border-[1px] px-4 py-6 space-y-4">
      <div className="flex items-center justify-center flex-row cursor-pointer">
        <img
          src={peanutButter}
          alt=""
          className="h-[10rem] w-[] object-cover"
        />
      </div>
      <div className="flex flex-col items-start">
        <h4 className="font-semibold text-sm text-gray-700 ">Vegetable</h4>
        <h4 className="font-semibold text-sm text-gray-700 ">
          Alpino Peanut Butter 1kg
        </h4>
        <div className="text-teal-700 font-semibold text-sm">$20.60</div>
        <div className="flex flex-row space-x-1 my-1 items-center justify-center">
          <HiOutlineStar
            className="text-orange-400 cursor-pointer "
            fontSize={"16px"}
          />
          <HiOutlineStar
            className="text-orange-400 cursor-pointer "
            fontSize={"16px"}
          />
          <HiOutlineStar
            className="text-orange-400 cursor-pointer "
            fontSize={"16px"}
          />
          <HiOutlineStar
            className="text-orange-400 cursor-pointer "
            fontSize={"16px"}
          />
          <HiOutlineStar
            className="text-orange-400 cursor-pointer "
            fontSize={"16px"}
          />
          <HiOutlineStar
            className="text-orange-400 cursor-pointer "
            fontSize={"16px"}
          />
          <h4 className="font-semibold text-sm text-gray-700 ">(4.0)</h4>
        </div>
        <div className="flex flex-row items-center justify-center">
          <h4 className="font-semibold text-sm text-gray-700 ">250ml</h4>
        </div>
        <div className="border-2 bg-white px-4 py-2 flex flex-row justify-center w-full items-center mt-4 cursor-pointer space-x-2">
          <p className="text-sm font-semibold text-center">Add</p>
          <HiPlusSm className="text-teal-700" />
        </div>
      </div>
    </div>
  );
}
