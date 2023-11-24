import React from "react";
import {
  HiHome,
  HiChevronRight,
  HiChevronDown,
  HiLockClosed,
  HiSearch,
  HiChevronUp,
  HiOutlineStar,
  HiStar,
} from "react-icons/hi";
import SearchedProduct from "../Components/SearchedProduct";

export default function Search() {
  return (
    <div className="flex flex-col w-full">
      {/* Shop Right Sidebar -------------------------------------------------------- */}
      <div className="flex flex-row justify-around bg-black/5 py-6 my-4">
        <h2 className="text-lg font-bold text-gray-800">Shop Right Sidebar</h2>
        <div className="flex flex-row space-x-2 items-center">
          <div className="flex flex-row space-x-1 items-center">
            <HiHome className="text-gray-700" />
            <HiChevronRight className="text-gray-700" />
          </div>
          <h2 className="text-sm font-semibold text-gray-700">
            Shop Right Sidebar
          </h2>
        </div>
      </div>
      {/* --------------------------------------------------------------------------------- */}

      {/* Category Section */}
      <div className="flex flex-row items-center my-4 justify-center">
        <div className="border-[1px] flex items-center h-[6rem] w-[10rem]">
          <img src="" alt="CImage-1" />
        </div>
        <div className="border-[1px] flex items-center h-[6rem] w-[10rem]">
          <img src="" alt="CImage-1" />
        </div>
        <div className="border-[1px] flex items-center h-[6rem] w-[10rem]">
          <img src="" alt="CImage-1" />
        </div>
        <div className="border-[1px] flex items-center h-[6rem] w-[10rem]">
          <img src="" alt="CImage-1" />
        </div>
        <div className="border-[1px] flex items-center h-[6rem] w-[10rem]">
          <img src="" alt="CImage-1" />
        </div>
        <div className="border-[1px] flex items-center h-[6rem] w-[10rem]">
          <img src="" alt="CImage-1" />
        </div>
        <div className="border-[1px] flex items-center h-[6rem] w-[10rem]">
          <img src="" alt="CImage-1" />
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------ */}

      {/* Search Section */}
      <div className="flex flex-row">
        {/* Sidebar -------------------------------------------------------------------------- */}
        <div className="flex flex-col border-r-2 w-[20%] px-6 mr-4">
          <div className="flex flex-row justify-between items-center my-4">
            <h3 className="text-md font-bold border-b-2 border-teal-700 ">
              Filters
            </h3>
            <h3 className="text-xs font-bold text-teal-700 cursor-pointer">
              Clear All
            </h3>
          </div>

          {/* Filters ------------------ */}
          <div className="flex flex-row flex-wrap space-x-2 space-y-1 ">
            <div className="bg-black/5 py-2 rounded-md px-4 flex flex-row items-center space-x-2 justify-between">
              <h3 className="text-xs font-semibold text-gray-700">
                Vegetables
              </h3>
              <HiLockClosed fontSize={"10px"} className="text-gray-700" />
            </div>
            <div className="bg-black/5 py-2 rounded-md px-4 flex flex-row items-center space-x-2 justify-between">
              <h3 className="text-xs font-semibold text-gray-700">Fruit</h3>
              <HiLockClosed fontSize={"10px"} className="text-gray-700" />
            </div>
            <div className="bg-black/5 py-2 rounded-md px-4 flex flex-row items-center space-x-2 justify-between">
              <h3 className="text-xs font-semibold text-gray-700">fresh</h3>
              <HiLockClosed fontSize={"10px"} className="text-gray-700" />
            </div>
            <div className="bg-black/5 py-2 rounded-md px-4 flex flex-row items-center space-x-2 justify-between">
              <h3 className="text-xs font-semibold text-gray-700">Milk</h3>
              <HiLockClosed fontSize={"10px"} className="text-gray-700" />
            </div>
            <div className="bg-black/5 py-2 rounded-md px-4 flex flex-row items-center space-x-2 justify-between">
              <h3 className="text-xs font-semibold text-gray-700">Meat</h3>
              <HiLockClosed fontSize={"10px"} className="text-gray-700" />
            </div>
          </div>
          {/*  --------------------------------------------------- */}

          <div className="flex flex-row justify-between items-center my-4">
            <h3 className="text-md font-bold border-b-2 border-teal-700">
              Categories
            </h3>
            <HiChevronDown />
          </div>

          {/* Categories ---------------------------------------------- */}
          <div>
            <div className="border-2 rounded-lg flex flex-row justfy-between items-center">
              <input
                type="text"
                className="px-4 py-1 border-r-2 outline-none text-sm font-semibold text-gray-700"
              />
              <div className="flex flex-row items-center justify-center px-3">
                <HiSearch className="text-gray-700" />
              </div>
            </div>

            <ul className="my-6 space-y-4">
              <li className="flex flex-row items-start justify-between ">
                <div className="flex flex-row space-x-2">
                  <input type="checkbox" />
                  <h3 className="text-gray-700 font-bold text-sm">
                    Fruits & Vegetables
                  </h3>
                </div>
                <h3 className="font-semibold text-gray-700 text-sm">(15)</h3>
              </li>
              <li className="flex flex-row items-start justify-between">
                <div className="flex flex-row space-x-2">
                  <input type="checkbox" />
                  <h3 className="text-gray-700 font-bold text-sm">
                    Bakery,Cake & Dairy
                  </h3>
                </div>
                <h3 className="font-semibold text-gray-700 text-sm">(225)</h3>
              </li>
              <li className="flex flex-row items-start justify-between">
                <div className="flex flex-row space-x-2">
                  <input type="checkbox" />
                  <h3 className="text-gray-700 font-bold text-sm">Beverages</h3>
                </div>
                <h3 className="font-semibold text-gray-700 text-sm">(15)</h3>
              </li>
              <li className="flex flex-row items-start justify-between ">
                <div className="flex flex-row space-x-2">
                  <input type="checkbox" />
                  <h3 className="text-gray-700 font-bold text-sm">
                    Snacks & Branded Foods
                  </h3>
                </div>
                <h3 className="font-semibold text-gray-700 text-sm">(115)</h3>
              </li>
              <li className="flex flex-row items-start justify-between">
                <div className="flex flex-row space-x-2">
                  <input type="checkbox" />
                  <h3 className="text-gray-700 font-bold text-sm">beverages</h3>
                </div>
                <h3 className="font-semibold text-gray-700 text-sm">(15)</h3>
              </li>
              <li className="flex flex-row items-center justify-between">
                <div className="flex flex-row space-x-2">
                  <input type="checkbox" />
                  <h3 className="text-gray-700 font-bold text-sm">
                    Beauty & HouseHold
                  </h3>
                </div>
                <h3 className="font-semibold text-gray-700 text-sm">(155)</h3>
              </li>
            </ul>
          </div>

          {/* Food Preference */}
          <div className="flex flex-row justify-between items-center my-2">
            <h3 className="text-md font-bold border-b-2 border-teal-700">
              Food Preference
            </h3>
            <HiChevronUp />
          </div>

          <ul className="my-2 mb-4 space-y-4">
            <li className="flex flex-row items-start justify-between ">
              <div className="flex flex-row space-x-2">
                <input type="checkbox" />
                <h3 className="text-gray-700 font-bold text-sm">vegetarian</h3>
              </div>
              <h3 className="font-semibold text-gray-700 text-sm">(15)</h3>
            </li>
            <li className="flex flex-row items-start justify-between ">
              <div className="flex flex-row space-x-2">
                <input type="checkbox" />
                <h3 className="text-gray-700 font-bold text-sm">
                  Non vegetarian
                </h3>
              </div>
              <h3 className="font-semibold text-gray-700 text-sm">(15)</h3>
            </li>
          </ul>

          {/* --------------------------------------------------------------- */}

          {/* ratings */}
          <div className="flex flex-row justify-between items-center my-2">
            <h3 className="text-md font-bold border-b-2 border-teal-700">
              Rating
            </h3>
            <HiChevronUp />
          </div>
          <ul className="my-6 space-y-4">
            <li className="flex flex-row items-center justify-between">
              <div className="flex flex-row space-x-2">
                <input type="checkbox" />
                <div className="flex flex-row ">
                  <HiStar className="text-orange-400" />
                  <HiStar className="text-orange-400" />
                  <HiStar className="text-orange-400" />
                  <HiStar className="text-orange-400" />
                  <HiStar className="text-orange-400" />
                </div>
              </div>
              <h3 className="font-semibold text-gray-700 text-sm">(5 Star)</h3>
            </li>
            <li className="flex flex-row items-center justify-between">
              <div className="flex flex-row space-x-2">
                <input type="checkbox" />
                <div className="flex flex-row ">
                  <HiStar className="text-orange-400" />
                  <HiStar className="text-orange-400" />
                  <HiStar className="text-orange-400" />
                  <HiStar className="text-orange-400" />
                  <HiOutlineStar className="text-orange-400" />
                </div>
              </div>
              <h3 className="font-semibold text-gray-700 text-sm">(4 Star)</h3>
            </li>
            <li className="flex flex-row items-center justify-between">
              <div className="flex flex-row space-x-2">
                <input type="checkbox" />
                <div className="flex flex-row ">
                  <HiStar className="text-orange-400" />
                  <HiStar className="text-orange-400" />
                  <HiStar className="text-orange-400" />
                  <HiOutlineStar className="text-orange-400" />
                  <HiOutlineStar className="text-orange-400" />
                </div>
              </div>
              <h3 className="font-semibold text-gray-700 text-sm">(3 Star)</h3>
            </li>
            <li className="flex flex-row items-center justify-between">
              <div className="flex flex-row space-x-2">
                <input type="checkbox" />
                <div className="flex flex-row ">
                  <HiStar className="text-orange-400" />
                  <HiStar className="text-orange-400" />
                  <HiOutlineStar className="text-orange-400" />
                  <HiOutlineStar className="text-orange-400" />
                  <HiOutlineStar className="text-orange-400" />
                </div>
              </div>
              <h3 className="font-semibold text-gray-700 text-sm">(2 Star)</h3>
            </li>
            <li className="flex flex-row items-center justify-between">
              <div className="flex flex-row space-x-2">
                <input type="checkbox" />
                <div className="flex flex-row ">
                  <HiStar className="text-orange-400" />
                  <HiOutlineStar className="text-orange-400" />
                  <HiOutlineStar className="text-orange-400" />
                  <HiOutlineStar className="text-orange-400" />
                  <HiOutlineStar className="text-orange-400" />
                </div>
              </div>
              <h3 className="font-semibold text-gray-700 text-sm">(1 Star)</h3>
            </li>
          </ul>
          {/* -------------------------------------------------------------------- */}

          {/* Discount */}
          <div className="flex flex-row justify-between items-center my-2">
            <h3 className="text-md font-bold border-b-2 border-teal-700">
              Discount
            </h3>
            <HiChevronUp />
          </div>

          <ul className="my-6 space-y-4">
            <li className="flex flex-row items-center justify-between">
              <div className="flex flex-row space-x-2">
                <input type="checkbox" />
                <h3 className="text-gray-700 font-bold text-sm">upto 5%</h3>
              </div>
              <h3 className="font-semibold text-gray-700 text-sm">(155)</h3>
            </li>
            <li className="flex flex-row items-center justify-between">
              <div className="flex flex-row space-x-2">
                <input type="checkbox" />
                <h3 className="text-gray-700 font-bold text-sm">5%-10%</h3>
              </div>
              <h3 className="font-semibold text-gray-700 text-sm">(155)</h3>
            </li>
            <li className="flex flex-row items-center justify-between">
              <div className="flex flex-row space-x-2">
                <input type="checkbox" />
                <h3 className="text-gray-700 font-bold text-sm">15-25%</h3>
              </div>
              <h3 className="font-semibold text-gray-700 text-sm">(155)</h3>
            </li>
            <li className="flex flex-row items-center justify-between">
              <div className="flex flex-row space-x-2">
                <input type="checkbox" />
                <h3 className="text-gray-700 font-bold text-sm">
                  More than 25%
                </h3>
              </div>
              <h3 className="font-semibold text-gray-700 text-sm">(155)</h3>
            </li>
          </ul>
          {/* ------------------------------------------------------------------------ */}

          {/* Pack Size */}
          <div className="flex flex-row justify-between items-center my-2">
            <h3 className="text-md font-bold border-b-2 border-teal-700">
              Pack Size
            </h3>
            <HiChevronUp />
          </div>
          <ul className="my-6 space-y-4">
            <li className="flex flex-row items-center justify-between">
              <div className="flex flex-row space-x-2">
                <input type="checkbox" />
                <h3 className="text-gray-700 font-bold text-sm">400 to 500g</h3>
              </div>
              <h3 className="font-semibold text-gray-700 text-sm">(155)</h3>
            </li>
            <li className="flex flex-row items-center justify-between">
              <div className="flex flex-row space-x-2">
                <input type="checkbox" />
                <h3 className="text-gray-700 font-bold text-sm">400 to 500g</h3>
              </div>
              <h3 className="font-semibold text-gray-700 text-sm">(155)</h3>
            </li>
            <li className="flex flex-row items-center justify-between">
              <div className="flex flex-row space-x-2">
                <input type="checkbox" />
                <h3 className="text-gray-700 font-bold text-sm">500 to 700g</h3>
              </div>
              <h3 className="font-semibold text-gray-700 text-sm">(155)</h3>
            </li>
            <li className="flex flex-row items-center justify-between">
              <div className="flex flex-row space-x-2">
                <input type="checkbox" />
                <h3 className="text-gray-700 font-bold text-sm">700 to 1kg</h3>
              </div>
              <h3 className="font-semibold text-gray-700 text-sm">(155)</h3>
            </li>
            <li className="flex flex-row items-center justify-between">
              <div className="flex flex-row space-x-2">
                <input type="checkbox" />
                <h3 className="text-gray-700 font-bold text-sm">
                  120-150 g each
                </h3>
              </div>
              <h3 className="font-semibold text-gray-700 text-sm">(155)</h3>
            </li>
            <li className="flex flex-row items-center justify-between">
              <div className="flex flex-row space-x-2">
                <input type="checkbox" />
                <h3 className="text-gray-700 font-bold text-sm">1 Pc</h3>
              </div>
              <h3 className="font-semibold text-gray-700 text-sm">(155)</h3>
            </li>
          </ul>

          {/* ------------------------------------------------------------------------------ */}
        </div>
      <div className="flex flex-row flex-wrap flex-shrink wrap w-full my-6 space-x-2 space-y-2">
        <SearchedProduct />
        <SearchedProduct />
        <SearchedProduct />
        <SearchedProduct />
        <SearchedProduct />
        <SearchedProduct />
        <SearchedProduct />
        <SearchedProduct />
        <SearchedProduct />
        <SearchedProduct />
        <SearchedProduct />
        <SearchedProduct />
        <SearchedProduct />
        <SearchedProduct />
        <SearchedProduct />
        <SearchedProduct />
        <SearchedProduct />
        <SearchedProduct />
        <SearchedProduct />
      </div>
      </div>
    </div>
  );
}
