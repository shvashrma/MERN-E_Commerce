import React from "react";
import { HiPlusSm, HiOutlineStar } from "react-icons/hi";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  return (
    <div className="flex flex-col items-center w-[12rem] h-auto min-h-[18rem] border-[1px] px-4 py-6 space-y-4">
      <div className="flex items-center justify-center flex-row cursor-pointer">
        <Link to={`/product/${product?._id}`}>
          <img
            src={product?.productImageUrl}
            alt=""
            className="h-[10rem] object-cover"
          />
        </Link>
      </div>
      <div className="flex flex-col items-start">
        <Link to={`/product/${product?._id}`}>
          <h4 className="font-semibold text-sm text-gray-700 cursor-pointer">
            {product?.productName}
          </h4>
        </Link>

        <div className="text-teal-700 font-semibold text-sm">
          {product?.price}$
        </div>
        <div className="flex flex-row space-x-1 my-1">
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
        </div>
        <div className="border-2 px-4 py-2 flex flex-row justify-center w-full items-center mt-4 cursor-pointer space-x-2">
          <p className="text-sm font-semibold text-center">Add</p>
          <HiPlusSm className="text-teal-700" />
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: propTypes.object,
};
