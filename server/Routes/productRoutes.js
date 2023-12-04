import express from "express";
import protectAuth from "../Middleware/protectAuth.js";
import {
  addingNewProduct,
  gettingAllProducts,
  getProduct
} from "../Controller/productController.js";

import multer from "multer";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router
  .route("/product/new")
  .post(upload.single("productImage"), protectAuth , addingNewProduct);
router.route("/products").get(gettingAllProducts);
router.route("/product/:productId").get(getProduct);

export default router;
