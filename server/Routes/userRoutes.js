import express from "express";
import {
  registerNewUser,
  loginExistingUSer,
} from "../Controller/userController.js";

const router = express.Router();

router.use("/user/register", registerNewUser);
router.use("/user/login", loginExistingUSer);

export default router;
