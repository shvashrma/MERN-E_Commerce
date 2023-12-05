import mongoose from "mongoose";

const productModel = mongoose.Schema(
  {
    sellerID: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    productImageUrl: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    ratings: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: {
      type: [String],
    },
    Quantity: {
      type: Number,
      default: 1,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productModel);

export default Product;
