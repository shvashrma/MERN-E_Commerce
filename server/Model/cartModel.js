import mongoose from "mongoose";

const cartModel = mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
    },
  },
  { timeStamps: true }
);

const Cart = mongoose.model("cart", cartModel);

export default Cart;
