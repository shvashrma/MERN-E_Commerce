import asyncHandler from "express-async-handler";
import wishlistModel from "../Model/wishlistModel.js";

const addtowishlistFunction = asyncHandler(async () => {});
const getwishlistItemsFunction = asyncHandler(async () => {});
const deleteItemFromWishlist = asyncHandler(async () => {});

export {
  addtowishlistFunction,
  getwishlistItemsFunction,
  deleteItemFromWishlist,
};
