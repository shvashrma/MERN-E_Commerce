import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../Redux/Slices/productSlice";
import { useParams } from "react-router-dom";

export default function Product() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product?.product);
  const loading = useSelector((state) => state.product?.loading);

  const { productId } = useParams();

  useEffect(() => {
    dispatch(getSingleProduct(productId));
  }, [dispatch, productId]);
  return <div>Product</div>;
}
