import express from "express";
import {
  addtocartFunction,
  deleteItemFromcartFunction,
  getCartItemsFunction,
} from "../Controller/cartController.js";
import protectAuth from "../Middleware/protectAuth.js";
const router = express.Router();

router.route("/cart").post(protectAuth, addtocartFunction);
router.route("/cart").get(protectAuth, getCartItemsFunction);
router
  .route("/cart/:productId")
  .delete(protectAuth, deleteItemFromcartFunction);

export default router;
