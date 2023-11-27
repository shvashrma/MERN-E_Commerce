import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadNewProduct } from "../Redux/Slices/productSlice";

// eslint-disable-next-line react/prop-types
export default function NewProductUpload({ setisNewProductUploadingStart }) {
  const [categories, setcategories] = useState([]);
  const [productName, setproductName] = useState("");
  const [price, setprice] = useState(null);
  const [productImage, setproductImage] = useState(null);
  const [description, setdescription] = useState("");
  const [quantity, setquantity] = useState(null);
  const dispatch = useDispatch();

  const handleCategories = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setcategories((prev) => [...prev, value]);
    } else {
      setcategories(categories.filter((e) => e !== value));
    }
  };

  const uploadNewProductFunction = () => {
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("price", price);
    formData.append("productImage", productImage);
    formData.append("description", description);
    formData.append("quantity", quantity);
    formData.append("category", categories);

    dispatch(uploadNewProduct(formData));
  };

  return (
    <form
      className="p-10 gap-4 flex flex-col w-full items-center justify-center"
      encType="multipart/form-data"
    >
      <h1 className="text-teal-900 text-2xl font-bold py-6">
        Upload New Product
      </h1>
      <div className="gap-4 w-[60%] flex-row flex">
        <label htmlFor="productName" className="flex-[0.2] font-semibold">
          Product Name<span className="text-teal-700">*</span>
        </label>
        <input
          type="text"
          id="productName"
          required
          className="border-2 px-4 py-1 text-gray-600 font-semibold rounded-sm flex-[0.8] outline-none "
          value={productName}
          onChange={(e) => setproductName(e.target.value)}
        />
      </div>
      <div className="gap-4 w-[60%] flex flex-row">
        <label htmlFor="" className="flex-[0.2] font-semibold">
          Description<span className="text-teal-700">*</span>
        </label>
        <input
          type="text"
          id="description"
          required
          className="border-2 px-4 py-1 text-gray-600 font-semibold rounded-sm flex-[.8] outline-none "
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />
      </div>
      <div className="gap-4 w-[60%] flex flex-row">
        <label htmlFor="" className="flex-[0.2] font-semibold">
          Price<span className="text-teal-700">*</span>
        </label>
        <input
          type="number"
          min={1}
          id="price"
          required
          className="border-2 px-4 py-1 text-gray-600 font-semibold rounded-sm flex-[.8] outline-none "
          value={price}
          onChange={(e) => setprice(e.target.value)}
        />
      </div>

      <div className="gap-4 w-[60%] flex flex-row">
        <label htmlFor="Category" className="flex-[0.2] font-semibold">
          Category
        </label>
        <div className="flex flex-row flex-[0.8] gap-4">
          <div className="gap-2 flex flex-row justify-center items-center">
            <input
              type="checkbox"
              id="category1"
              name="categories[]"
              value="Grocery"
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
              value="Electronics"
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
              value="Medicines"
              onChange={(e) => handleCategories(e)}
            />
            <label
              htmlFor="category3"
              className="text-gray-500 text-md font-bold"
            >
              Medicines
            </label>
          </div>
          <div className="gap-2 flex flex-row justify-center items-center">
            <input
              type="checkbox"
              id="category4"
              name="categories[]"
              value="Clothings"
              onChange={(e) => handleCategories(e)}
            />
            <label
              htmlFor="category4"
              className="text-gray-500 text-md font-bold"
            >
              Clotings
            </label>
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
          </div>
        </div>
      </div>

      <div className="gap-4 w-[60%] flex flex-row">
        <label htmlFor="quantity" className="flex-[0.2] font-semibold">
          Quantity<span className="text-teal-700">*</span>
        </label>
        <input
          type="number"
          required
          id="quantity"
          className="border-2 px-4 py-1 text-gray-600 font-semibold rounded-sm flex-[.8] outline-none "
          value={quantity}
          onChange={(e) => setquantity(e.target.value)}
        />
      </div>

      <div className="gap-4 w-[60%] flex flex-row">
        <label htmlFor="productImage" className="flex-[0.2] font-semibold">
          Product Image<span className="text-teal-700">*</span>
        </label>
        <input
          type="file"
          id="productImage"
          required
          className="flex-[0.8]"
          onChange={(e) => setproductImage(e.target.files[0])}
          accept="image/*"
          name="image"
        />
      </div>

      <div className="flex flex-row justify-center gap-6">
        <button
          className="flex flex-row items-center justify-center space-x-1 cursor-pointer border-2 border-red-700 py-2 px-10 rounded-md text-red-700"
          onClick={(e) => {
            e.preventDefault();
            setisNewProductUploadingStart(false);
            console.log("button click");
          }}
        >
          Cancel
        </button>
        <button
          className="flex flex-row items-center justify-center space-x-1 cursor-pointer border-2 border-teal-700 py-2 px-10 rounded-md"
          onClick={(e) => {
            e.preventDefault();
            uploadNewProductFunction();
          }}
        >
          Upload
        </button>
      </div>
    </form>
  );
}
