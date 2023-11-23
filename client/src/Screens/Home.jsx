import react from "react";
import { HiOutlineClock } from "react-icons/hi";
import Product from "../Components/Product";
// import BannerImg1 from "../../../Assets/Banners/Banner-1.webp";
// import BannerImg2 from "../../../Assets/Banners/Banner-2.webp";
// import BannerImg3 from "../../../Assets/Banners/Banner-3.webp";
// import BannerImg4 from "../../../Assets/Banners/Banner-4.webp";
// import Mainbanner1 from "../../../Assets/Banners/Main-1.jpg";
// import Mainbanner2 from "../../../Assets/Banners/Main-2.jpg";
// import Mainbanner3 from "../../../Assets/Banners/Main-3.jpg";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Upper Division */}
      <div className="flex flex-row items-center justify-between h-[30rem] my-6 mx-2 w-full ">
        <div className="flex flex-row items-center justify-center w-[60%] h-[30rem]">
          <img src="" alt="MainImage-1" className="object-fill h-[30rem]" />
        </div>
        <div className="flex flex-col items-center justify-center w-[40%] h-[30rem] space-y-4 ">
          <img src="" alt="MainImage-2" className="object-fill h-[15rem]" />
          <img src="" alt="MainImage-3" className="object-fill h-[15rem]" />
        </div>
      </div>
      {/* 2nd Division */}
      <div className="flex flex-row items-center justify-between w-full space-x-4 my-4">
        <img src="" alt="Banner-1" className="object-fill h-[10rem] " />
        <img src="" alt="Banner-2" className="object-fill h-[10rem] " />
        <img src="" alt="Banner-3" className="object-fill h-[10rem] " />
        <img src="" alt="Banner-4" className="object-fill h-[10rem] " />
      </div>

      {/* Middle Division */}
      <div className="flex flex-row items-start justify-between w-full ">

        {/* Sidebar -------------------------------------------------------------------- */}
        <div className="flex flex-col items-start bg-black/5 w-[20%] px-6 my-6 mr-6">
          <div className="flex flex-col items-start border-b-2 py-6 space-y-2">
            <h5 className="text-lg font-bold ">Category</h5>
            <ul className="space-y-2 px-4">
              <li className="cursor-pointer font-semibold text-sm text-gray-700">
                Vegetables & Fruit
              </li>
              <li className="cursor-pointer font-semibold text-sm text-gray-700">
                Beverages
              </li>
              <li className="cursor-pointer font-semibold text-sm text-gray-700">
                Meats & Seafoods
              </li>
              <li className="cursor-pointer font-semibold text-sm text-gray-700">
                Breakfast & Dairy
              </li>
              <li className="cursor-pointer font-semibold text-sm text-gray-700">
                Frozen foods
              </li>
              <li className="cursor-pointer font-semibold text-sm text-gray-700">
                Biscuits & Snacks
              </li>
              <li className="cursor-pointer font-semibold text-sm text-gray-700">
                Wines & Alcohol Drinks
              </li>
              <li className="cursor-pointer font-semibold text-sm text-gray-700">
                Milk & Dairies
              </li>
              <li className="cursor-pointer font-semibold text-sm text-gray-700">
                Pet Foods
              </li>
            </ul>
          </div>
          <div className="flex flex-col py-4 px-4 space-y-1">
            <h4 className="cursor-pointer font-semibold text-sm text-gray-700">
              Value of the Day
            </h4>
            <h4 className="cursor-pointer font-semibold text-sm text-gray-700">
              Top 50 others
            </h4>
            <h4 className="cursor-pointer font-semibold text-sm text-gray-700">
              New Arrivals
            </h4>
          </div>
        </div>
        {/* --------------------------------------------------------------------------- */}

        {/* Top Save Today ------------------------------------------------------------- */}
        <div className="flex flex-col items-start justify-between w-full">
          <div className="w-[80%] flex flex-col my-6">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col items-start space-y-3">
                <h2 className="text-2xl font-bold text-black/90 border-b-2 pb-2 border-teal-700">
                  Top Save Today
                </h2>
                <p className="font-semibold text-xs text-gray-700 ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                  porro itaque autem nemo deleniti?
                </p>
              </div>
              <div className="px-8 bg-red-600 flex flex-row items-center text-white space-x-2 rounded-sm">
                <HiOutlineClock />
                <p>Expires in 00:00:00</p>
              </div>
            </div>
            <div className="flex flex-row flex-wrap flex-shrink wrap w-full my-6">
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>
          {/* ---------------------------------------------------------------------------------- */}

          {/* Browse by category ------------------------------------------------------------------ */}
          <div className="w-[80%] flex flex-col my-6">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col items-start space-y-3">
                <h2 className="text-2xl font-bold text-black/90 border-b-2 pb-2 border-teal-700">
                  Browse By Category
                </h2>
                <p className="font-semibold text-xs text-gray-700 ">
                  Top Category of the week
                </p>
              </div>
            </div>
            <div className="flex flex-row flex-wrap flex-shrink wrap w-full my-6">
              <div className="flex flex-row items-center justify-between w-full space-x-2 my-2">
                <img
                  src=""
                  alt="Category-1"
                  className="object-fill h-[6rem] border-2 w-[6rem] cursor-pointer"
                />
                <img
                  src=""
                  alt="Category-2"
                  className="object-fill h-[6rem] border-2 w-[6rem] cursor-pointer"
                />
                <img
                  src=""
                  alt="Category-3"
                  className="object-fill h-[6rem] border-2 w-[6rem] cursor-pointer"
                />
                <img
                  src=""
                  alt="Category-4"
                  className="object-fill h-[6rem] border-2 w-[6rem] cursor-pointer"
                />
                <img
                  src=""
                  alt="Category-4"
                  className="object-fill h-[6rem] border-2 w-[6rem] cursor-pointer"
                />
                <img
                  src=""
                  alt="Category-4"
                  className="object-fill h-[6rem] border-2 w-[6rem] cursor-pointer"
                />
                <img
                  src=""
                  alt="Category-4"
                  className="object-fill h-[6rem] border-2 w-[6rem] cursor-pointer"
                />
              </div>
            </div>
          </div>
          {/* -------------------------------------------------------------------------------------------- */}

          {/* Food Cupboard ------------------------------------------------------------------------------ */}
          <div className="w-[80%] flex flex-col my-6">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col items-start space-y-3">
                <h2 className="text-2xl font-bold text-black/90 border-b-2 pb-2 border-teal-700">
                  Food Cupboard
                </h2>
                <p className="font-semibold text-xs text-gray-700 ">
                  A virtual assistant collects the products from your list
                </p>
              </div>
            </div>
            <div className="flex flex-row flex-wrap flex-shrink wrap w-full my-6">
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>
          {/* ---------------------------------------------------------------------------------------------- */}

          {/* Our Best Seller ------------------------------------------------------------------------------ */}
          <div className="w-[80%] flex flex-col my-6">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col items-start space-y-3">
                <h2 className="text-2xl font-bold text-black/90 border-b-2 pb-2 border-teal-700">
                  Our Best Seller
                </h2>
                <p className="font-semibold text-xs text-gray-700 ">
                  A virtual assistant collects the products form your list
                </p>
              </div>
            </div>
            <div className="flex flex-row flex-wrap flex-shrink wrap w-full my-6">
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>

          {/* --------------------------------------------------------------------------------------- */}
        </div>
      </div>
    </div>
  );
}
