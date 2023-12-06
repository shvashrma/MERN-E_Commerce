import cartModel from "../Model/cartModel.js";
import asyncHandler from "express-async-handler";
import userModel from ".././Model/userModel.js";
import productModel from "../Model/productModel.js";

const addtocartFunction = asyncHandler(async (req, res) => {
  const { productId } = req.body;
  try {
    const newcartItem = await cartModel.create({
      productId,
    });

    if (newcartItem) {
      await userModel.findByIdAndUpdate(req.user._id, {
        $push: { cartItems: newcartItem._id },
      });
      return res.status(200).json(newcartItem);
    } else {
      return res.status(500).send("Internal server error");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errorMessage: error.message });
  }
});

const getCartItemsFunction = asyncHandler(async (req, res) => {
  try {
    const user = await userModel.findById(req.user._id).populate("cartItems");
    if (user) {
      const cartItems = user.cartItems;
      console.log(cartItems);
      return res.status(200).json(cartItems);
    } else {
      return res.status(500).send("Internal server error");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errorMessage: error.message });
  }
});

const deleteItemFromcartFunction = asyncHandler(async () => {});

export { addtocartFunction, getCartItemsFunction, deleteItemFromcartFunction };
