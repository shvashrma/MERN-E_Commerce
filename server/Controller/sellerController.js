import sellerModel from "../Model/sellerModel.js";
import UserModel from "../Model/userModel.js";
import asyncHandler from "express-async-handler";

const registerNewSeller = asyncHandler(async (req, res) => {
  const { ownerName, email, phoneNumber, organizationName, categories } =
    req.body;
  try {
    const newSeller = await sellerModel.create({
      ownerName,
      email,
      phoneNumber,
      organizationName,
      categories,
      userId: req.user._id,
    });

    await UserModel.findByIdAndUpdate(req.user, { isSeller: true });
    await UserModel.findByIdAndUpdate(req.user, { sellerId: newSeller._id });

    if (newSeller) {
      return res
        .status(200)
        .json(newSeller)
        .send("Successfully seller account created");
    } else {
      return res.status(403).send("Bad request!!!");
    }
  } catch (error) {
    return res.status(500).json({ errorMessage: "Internal server error" });
  }
});

const getSellerDetails = asyncHandler(async (req, res) => {
  const sellerId = req.params;
  try {
    const seller = await sellerModel.findById(sellerId).select("-userId");
    if (seller) {
      return res.status(200).json(seller);
    } else {
      return res.status(404).send("Invalid seller Id");
    }
  } catch (error) {
    return res.status(500).json({ errorMessage: "Internal server error" });
  }
});

export { registerNewSeller, getSellerDetails };
