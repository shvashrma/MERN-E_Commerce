import express from "express";
import protectAuth from "../Middleware/protectAuth.js";
import {
  addtowishlistFunction,
  deleteItemFromWishlist,
  getwishlistItemsFunction,
} from "../Controller/wishlistController.js";

const router = express.Router();

router.route("/wishlist").post(protectAuth, addtowishlistFunction);
router.route("/wishlist").get(protectAuth, getwishlistItemsFunction);
router
  .route("/wishlist/:productId")
  .delete(protectAuth, deleteItemFromWishlist);

export default router;
