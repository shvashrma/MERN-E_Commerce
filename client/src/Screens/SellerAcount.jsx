import React, { useState } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { useSelector } from "react-redux";
import NewProductUpload from "../Components/NewProductUpload";

export default function SellerAcount() {
  const sellerAccount = useSelector((state) => state.seller?.sellerAccount);
  const [isNewProductUploadingStart, setisNewProductUploadingStart] =
    useState(false);

  return (
    <div className="w-full my-6 flex flex-col gap-8 min-h-[60vh] justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl text-teal-900 font-bold">
          Manage your seller Account
        </h1>
        <p className="w-3/5 text-sm text-gray-500 font-semibold text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
          dolores, dicta, exercitationem deserunt quod molestiae vel ipsum iure
          veritatis porro ullam cupiditate id voluptates nulla provident
          repudiandae, recusandae tempore? Fugit.
        </p>
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-row items-center justify-between w-3/5">
          <div className="flex flex-row gap-3 border-b-2">
            <div className="gap-2 flex flex-row">
              <div className="text-teal-900 font-semibold">
                Organization Name
              </div>
              <div>:</div>
            </div>
            <div className="gap-2 flex flex-row items-center justify-center">
              <div className="text-gray-700 font-semibold">
                {sellerAccount?.organizationName}
              </div>
              <HiOutlinePencil className="text-teal-900 cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-row gap-3 border-b-2">
            <div className="gap-2 flex flex-row">
              <div className="text-teal-900 font-semibold">Owner Name</div>
              <div>:</div>
            </div>
            <div className="gap-2 flex flex-row items-center justify-center">
              <div className="text-gray-700 font-semibold">
                {sellerAccount?.ownerName}
              </div>
              <HiOutlinePencil className="text-teal-900 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between w-3/5">
          <div className="flex flex-row gap-3 border-b-2">
            <div className="gap-2 flex flex-row">
              <div className="text-teal-900 font-semibold">Email Address</div>
              <div>:</div>
            </div>
            <div className="gap-2 flex flex-row items-center justify-center">
              <div className="text-gray-700 font-semibold">
                {sellerAccount?.email}
              </div>
              <HiOutlinePencil className="text-teal-900 cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-row gap-3 border-b-2">
            <div className="gap-2 flex flex-row">
              <div className="text-teal-900 font-semibold">Phone Number</div>
              <div>:</div>
            </div>
            <div className="gap-2 flex flex-row items-center justify-center">
              <div className="text-gray-700 font-semibold">
                {sellerAccount?.phoneNumber}
              </div>
              <HiOutlinePencil className="text-teal-900 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between w-3/5">
          <div className="flex flex-row gap-3 border-b-2">
            <div className="gap-2 flex flex-row">
              <div className="text-teal-900 font-semibold">Categories</div>
              <div>:</div>
            </div>
            <div className="gap-2 flex flex-row items-center justify-center">
              <div className="text-gray-700 font-semibold">
                {sellerAccount?.categories.map((data) => {
                  return (
                    <span className="gap-2" key={data}>
                      <p>{data}</p>
                    </span>
                  );
                })}
              </div>
              <HiOutlinePencil className="text-teal-900 cursor-pointer" />
            </div>
          </div>
          <div className="flex flex-row gap-3 border-b-2">
            <div className="gap-2 flex flex-row">
              <div className="text-teal-900 font-semibold">Total Orders</div>
              <div>:</div>
            </div>
            <div className="gap-2 flex flex-row items-center justify-center">
              <div className="text-gray-700 font-semibold">
                {sellerAccount?.totalOrders.length}
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3 border-b-2">
            <div className="gap-2 flex flex-row">
              <div className="text-teal-900 font-semibold">Total ratings</div>
              <div>:</div>
            </div>
            <div className="gap-2 flex flex-row items-center justify-center">
              <div className="text-gray-700 font-semibold">
                {sellerAccount?.ratings}
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-3 border-b-2">
            <div className="gap-2 flex flex-row">
              <div className="text-teal-900 font-semibold">Total Products</div>
              <div>:</div>
            </div>
            <div className="gap-2 flex flex-row items-center justify-center">
              <div className="text-gray-700 font-semibold">
                {sellerAccount?.products.length}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="text-teal-800 font-bold text-2xl ">Products</div>
        <div className="border-2 border-teal-700 flex flex-col justify-center w-full min-h-[20vh]">
          {isNewProductUploadingStart ? (
            <NewProductUpload setisNewProductUploadingStart={setisNewProductUploadingStart} />
          ) : (
            <div className="flex flex-row items-center justify-center h-full">
              <div
                onClick={() => setisNewProductUploadingStart(true)}
                className="cursor-pointer text-gray-700 font-semibold text-sm"
              >
                Click here to upload new product
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
