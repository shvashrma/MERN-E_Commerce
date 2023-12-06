import asyncHandler from "express-async-handler";
import wishlistModel from "../Model/wishlistModel.js";
import productModel from "../Model/productModel.js";

const addtowishlistFunction = asyncHandler(async () => {
  const { productId } = req.body;
  try {
    const newWishlistItem = await wishlistModel.create({
      productId,
    });

    if (newWishlistItem) {
      await userModel.findByIdAndUpdate(req.user._id, {
        $push: { wishlistItems: newWishlistItem._id },
      });
      return res.status(200).json(newWishlistItem);
    } else {
      return res.status(500).send("Internal server error");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errorMessage: error.message });
  }
});

const getwishlistItemsFunction = asyncHandler(async () => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user) {
      const wishlistItems = user.wishlistItems;
      const wishlistProducts = [];

      for (const items of wishlistItems) {
        const wishlistId = await wishlistModel.findById(items);
        const products = await productModel.findById(wishlistId?.productId);
        wishlistProducts.push(products);
      }

      return res.status(200).json(wishlistProducts);
    } else {
      return res.status(500).send("Internal server error");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errorMessage: error.message });
  }
});
const deleteItemFromWishlist = asyncHandler(async () => {});

export {
  addtowishlistFunction,
  getwishlistItemsFunction,
  deleteItemFromWishlist,
};
