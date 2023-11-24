import express from "express";
import {
  registerNewUser,
  loginExistingUser,
  getUser,
} from "../Controller/userController.js";
import protectAuth from "../Middleware/protectAuth.js";

const router = express.Router();

router.route("/user/register").post(registerNewUser);
router.route("/user/login").post(loginExistingUser);
router.route("/user").get(protectAuth , getUser)

export default router;
