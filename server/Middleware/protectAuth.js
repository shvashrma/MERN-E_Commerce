import jwt from "jsonwebtoken";
import userModel from "../Model/userModel.js";
import asyncHandler from "express-async-handler";

const protectAuth = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
      req.user = await userModel.findById(decodedToken.id).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(400).json({ Message: "Invalid Token" });
    }
  } else {
    res.status(403).json({ Messgae: "Token not found." });
  }

  if (!token) {
    res.status(401);
    throw new Error("Not Authorized , Not Valid Token");
  }
});

export default protectAuth;
