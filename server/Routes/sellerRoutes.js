import express from "express";
import protectAuth from "../Middleware/protectAuth.js";
import {
  registerNewSeller,
  getSellerDetails,
} from "../Controller/sellerController.js";

const router = express.Router();

router.route("/seller/register").post(protectAuth, registerNewSeller);
router.route("/seller/:sellerID").get(protectAuth, getSellerDetails);

export default router;
