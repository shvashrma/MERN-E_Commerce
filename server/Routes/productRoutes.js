import express from "express";
import protectAuth from "../Middleware/protectAuth.js";
import {
  addingNewProduct,
  getProduct,
  gettingAllProducts,
} from "../Controller/productController.js";

const router = express.Router();

router.route("/product/new").post(protectAuth, addingNewProduct);
router.route("/products").get(gettingAllProducts);
router.route("/product/:productId").get(getProduct);

export default router;
