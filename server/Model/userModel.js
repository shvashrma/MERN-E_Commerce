import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userModel = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
    },
    profilePic: {
      type: String,
    },
    isSeller: {
      type: Boolean,
      default: false,
    },
    sellerId: {
      type: String,
    },
    wishlistItems: [String],
    cartItems: [String],
  },
  { timestamps: true }
);

userModel.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userModel.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("User", userModel);

export default User;
