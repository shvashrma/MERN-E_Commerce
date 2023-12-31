import userModel from "../Model/userModel.js";
import asyncHandler from "express-async-handler";
import generateToken from "../Token/generateJWT.js";

// Controller for regsitering new User
const registerNewUser = asyncHandler(async (req, res) => {
  const { email, password, userName, profilePic, phoneNumber, isSeller } =
    req.body;

  try {
    const isEmailAlreadyExists = await userModel.findOne({ email });
    if (isEmailAlreadyExists) {
      return res
        .status(400)
        .json({ Message: "Email already exists. Try again later" });
    } else {
      const newUser = await userModel.create({
        email,
        password,
        profilePic,
        userName,
        phoneNumber,
        isSeller,
      });
      if (newUser) {
        return res.status(200).json(newUser);
      } else {
        return res.status(500).json({ Message: "Internal Server Error" });
      }
    }
  } catch (error) {
    return res.status(500).json(error);
  }
});

// Controller for loggin in existing user
const loginExistingUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    const isEmailAlreadyExist = await userModel.findOne({ email });
    if (isEmailAlreadyExist) {
      const isPasswordMatch = await isEmailAlreadyExist.comparePassword(
        password
      );

      if (isPasswordMatch) {
        //Generate token middle will generate a authtoken
        return res
          .status(200)
          .json({ AuthToken: await generateToken(isEmailAlreadyExist?._id) });
      } else {
        return res.status(400).json({ Message: "Invalid email or password" });
      }
    } else {
      return res.status(404).json({ Message: "Email not found in database" });
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

const getUser = asyncHandler(async (req, res) => {
  try {
    const user = await userModel.findById(req.user).select("-password");
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).send("user not found");
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

export { registerNewUser, loginExistingUser, getUser };
