import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerSellerAccount } from "../Redux/Slices/SellerAccount";
import { useNavigate } from "react-router-dom";
export default function SellerRegister() {
  const [categories, setcategories] = useState([]);
  const [organizationName, setorganizationName] = useState("");
  const [ownerName, setownerName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setemail] = useState("");
  const dispatch = useDispatch();
  const authToken = useSelector((state) => state.user?.authToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authToken) {
      navigate("/login");
    }
  }, [authToken]);

  const handleCategories = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setcategories((prev) => [...prev, value]);
    } else {
      setcategories(categories.filter((e) => e !== value));
    }
  };

  const credentials = {
    categories,
    organizationName,
    ownerName,
    phoneNumber,
    email,
  };

  const sellerRegisterFunctuon = () => {
    dispatch(registerSellerAccount(credentials));

    setemail("");
    setownerName("");
    setorganizationName("");
    setcategories([]);
    setphoneNumber("");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-6 my-6">
      <div className="flex flex-col items-center justify-ceneter gap-4 ">
        <h2 className="text-[2rem] text-teal-700 font-bold ">
          Start your Journey with us. Become a BlipKart Seller
        </h2>
        <p className="w-2/3 text-sm font-semibold text-gray-400 text-center ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex et
          aliquid soluta inventore vero beatae doloremque iste delectus minima
          cum similique, quae quod non totam ipsum quam eius provident amet?
        </p>
      </div>
      <div className="flex flex-col w-3/4 border-2 border-gray-500 items-start">
        <form
          className="flex flex-col w-full gap-4 py-[4rem] px-[4rem]"
          id="sellerForm"
        >
          <div className="flex flex-row gap-4 w-full ">
            <label
              htmlFor="OrganizationName"
              className="font-semibold text-md text-gray-500 flex-[.2]"
            >
              Orgainzation Name
              <span className="font-bold text-teal-700">*</span>
            </label>
            <input
              type="text"
              name="OrganizationName"
              required
              placeholder="Organization Name"
              className="border-2 border-teal-800 py-1 px-4 font-semibold text-gray-500 w-full flex-[.8] outline-none rounded-md"
              onChange={(e) => setorganizationName(e.target.value)}
              value={organizationName}
            />
          </div>
          <div className="flex flex-row gap-4 w-full ">
            <label
              htmlFor="OwnerName"
              className="font-semibold text-md text-gray-500 flex-[.2]"
            >
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Owner's Name<span className="font-bold text-teal-700">*</span>
            </label>
            <input
              type="text"
              name="OwnerName"
              required
              placeholder="Owner's Name"
              className="border-2 border-teal-800 py-1 px-4 font-semibold text-gray-500 w-full flex-[.8] outline-none rounded-md"
              onChange={(e) => setownerName(e.target.value)}
              value={ownerName}
            />
          </div>
          <div className="flex flex-row gap-4 w-full ">
            <label
              htmlFor="email"
              className="font-semibold text-md text-gray-500 flex-[.2]"
            >
              Email Address<span className="font-bold text-teal-700">*</span>
            </label>
            <input
              type="text"
              name="email"
              required
              placeholder="email address"
              className="border-2 border-teal-800 py-1 px-4 font-semibold text-gray-500 w-full flex-[.8] outline-none rounded-md"
              onChange={(e) => setemail(e.target.value)}
              value={email}
            />
          </div>
          <div className="flex flex-row gap-4 w-full ">
            <label
              htmlFor="phoneNumber"
              className="font-semibold text-md text-gray-500 flex-[.2]"
            >
              Phone Number<span className="font-bold text-teal-700">*</span>
            </label>
            <input
              type="text"
              name="phoneNumber"
              required
              placeholder="Phone Number"
              className="border-2 border-teal-800 py-1 px-4 font-semibold text-gray-500 w-full flex-[.8] outline-none rounded-md"
              onChange={(e) => setphoneNumber(e.target.value)}
              value={phoneNumber}
            />
          </div>
          <div className="flex flex-row gap-4 w-full ">
            <label
              htmlFor="categories"
              className="font-semibold text-md text-gray-500 flex-[.2]"
            >
              Categories<span className="font-bold text-teal-700">*</span>
            </label>
            <div className="flex-[.8] flex flex-row flex-wrap gap-4 items-center justify-start">
              <div className="gap-2 flex flex-row justify-center items-center">
                <input
                  type="checkbox"
                  id="category1"
                  name="categories[]"
                  value="grocery"
                  onChange={(e) => handleCategories(e)}
                />
                <label
                  htmlFor="category1"
                  className="text-gray-500 text-md font-bold"
                >
                  Grocery
                </label>
              </div>
              <div className="gap-2 flex flex-row justify-center items-center">
                <input
                  type="checkbox"
                  id="category2"
                  name="categories[]"
                  value="electronics"
                  onChange={(e) => handleCategories(e)}
                />
                <label
                  htmlFor="category2"
                  className="text-gray-500 text-md font-bold"
                >
                  Electronics
                </label>
              </div>
              <div className="gap-2 flex flex-row justify-center items-center">
                <input
                  type="checkbox"
                  id="category3"
                  name="categories[]"
                  value="food"
                  onChange={(e) => handleCategories(e)}
                />
                <label
                  htmlFor="category3"
                  className="text-gray-500 text-md font-bold"
                >
                  Food
                </label>
              </div>
              <div className="gap-2 flex flex-row justify-center items-center">
                <input
                  type="checkbox"
                  id="category4"
                  name="categories[]"
                  value="clothings"
                  onChange={(e) => handleCategories(e)}
                />
                <label
                  htmlFor="category4"
                  className="text-gray-500 text-md font-bold"
                >
                  Clotings
                </label>
              </div>
              <div className="gap-2 flex flex-row justify-center items-center">
                <input
                  type="checkbox"
                  id="category5"
                  name="categories[]"
                  value="fitness"
                  onChange={(e) => handleCategories(e)}
                />
                <label
                  htmlFor="category5"
                  className="text-gray-500 text-md font-bold"
                >
                  Fitness
                </label>
              </div>
              <div className="gap-2 flex flex-row justify-center items-center">
                <input
                  type="checkbox"
                  id="category6"
                  name="categories[]"
                  value="medicines"
                  onChange={(e) => handleCategories(e)}
                />
                <label
                  htmlFor="category6"
                  className="text-gray-500 text-md font-bold"
                >
                  Medicines
                </label>
              </div>
            </div>
          </div>
          <div className="w-full px-4 py-2 text-end items-center justify-center">
            <p className="font-semibold text-xs text-gray-500 ">
              <span className="font-bold text-md text-teal-700">*</span> feilds
              are required.
            </p>
          </div>
          <div className="w-full flex items-center justify-center ">
            <button
              className="flex flex-row items-center justify-center space-x-1 cursor-pointer border-2 border-teal-700 py-2 px-4 rounded-md w-[25%]"
              onClick={(e) => {
                e.preventDefault();
                sellerRegisterFunctuon();
              }}
            >
              <h2 className="text-lg font-bold text-teal-700">
                Become a Seller
              </h2>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
