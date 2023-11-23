import express from "express";
import {
  registerNewUser,
  loginExistingUSer,
} from "../Controller/userController.js";

const router = express.Router();

router.route("/user/register").post(registerNewUser);
router.route("/user/login").post(loginExistingUSer);

export default router;
