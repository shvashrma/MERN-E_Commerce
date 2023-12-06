import react, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../Redux/Slices/productSlice";
import { useParams } from "react-router-dom";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";

export default function Product() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product?.product);
  const loading = useSelector((state) => state.product?.loading);
  const [isWishlisted, setisWishlisted] = useState(false);

  const { productId } = useParams();

  useEffect(() => {
    dispatch(getSingleProduct(productId));
  }, [dispatch, productId]);

  return (
    <>
      {loading ? (
        <div className="h-[100vh] w-[100vw] bg-black" />
      ) : (
        <div className="flex min-h-[80vh] min-w-[80vw] flex-row items-center justify-start gap-10">
          <div className="min-h-[40vh] h-[60vh] border-2 border-teal-700 min-w-[20vw] w-[30vw] flex items-center justify-center">
            <img
              src={product?.productImageUrl}
              alt=""
              className="w-[30vw] h-[60vh] object-center"
            />
          </div>
          <div className="flex flex-col justify-start w-full min-w-[30vw] min-h-[60vh]">
            <div className="flex flex-row justify-between border-b-2 border-teal-700 py-8">
              <div className="flex flex-col">
                <h1>{product?.productName}</h1>
                <h5>{product?.description}</h5>
              </div>
              <div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    if (isWishlisted) {
                      setisWishlisted(false);
                    } else {
                      setisWishlisted(true);
                    }
                  }}
                >
                  {isWishlisted ? (
                    <HiHeart color="red" fontSize={"25px"} />
                  ) : (
                    <HiOutlineHeart color="gray" fontSize={"25px"} />
                  )}
                </button>
              </div>
            </div>
            <div className="flex flex-row my-4 gap-10 ">
              <button className="px-6 min-w-[8rem] py-2 border-2 rounded-sm border-teal-700 text-teal-700 font-semibold">
                Add to cart
              </button>
              <button className="px-6 py-1 min-w-[8rem] bg-teal-700 text-white font-semibold">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
