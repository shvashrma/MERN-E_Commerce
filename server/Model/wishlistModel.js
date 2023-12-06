import mongoose from "mongoose";

const wishlistSchema = mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

const Wishlist = mongoose.model("wishlist", wishlistSchema);

export default Wishlist;
