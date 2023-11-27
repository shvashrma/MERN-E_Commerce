import mongoose from "mongoose";

const sellerModel = mongoose.Schema(
  {
    ownerName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    organizationName: {
      type: String,
      required: true,
    },
    products: [String],
    userId: {
      type: String,
      required: true,
    },
    categories: {
      type: [String],
      required: true,
    },
    ratings: {
      type: Number,
      required: true,
      default: 0,
    },
    totalOrders: {
      type: [],
    },
  },
  { timestamps: true }
);

const seller = mongoose.model("sellers", sellerModel);
export default seller;
