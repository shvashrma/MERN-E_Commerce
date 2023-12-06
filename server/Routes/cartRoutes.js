import express from "express";

const router = express.Router();

router.route("/cart").post();
router.route("/cart").get();
router.route("/cart/:productId").delete();

export default router;
