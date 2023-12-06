import express from "express";

const router = express.Router();

router.route("/wishlist").post();
router.route("/wishlist").get();
router.route("/wishlist/:productId").delete();

export default router;
