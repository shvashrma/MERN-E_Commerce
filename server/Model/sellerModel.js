import mongoose from "mongoose";

const sellerModel = mongoose.Schema(
  {
    ownerName: {
      type: String,
      required,
    },
    email: {
      type: String,
      required,
    },
    phoneNumber: {
      type: String,
      required,
    },
    organizationName: {
      type: String,
      required,
    },
    products: [String],
    userId: {
      type: String,
      required,
    },
    categories: {
      type: [String],
      required,
    },
    ratings: {
      type: Number,
      required,
      default: 0,
    },
  },
  { timestamps: true }
);

const seller = mongoose.model("sellers", sellerModel);
export default seller;
