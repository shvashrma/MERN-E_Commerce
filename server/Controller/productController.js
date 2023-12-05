import productModel from "../Model/productModel.js";
import asyncHandler from "express-async-handler";
import {
  PutObjectCommand,
  S3Client,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import sellerModel from "../Model/sellerModel.js";
import crypto from "crypto";
import sharp from "sharp";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import dotenv from "dotenv";

const randomImageName = async (bytes = 32) =>
  await crypto.randomBytes(bytes).toString("hex");

dotenv.config();
const bucketName = process.env.AWS_BUCKET_NAME;
const secretAccessKey = process.env.AWS_BUCKET_SECRET_ACCESSKEY;
const accessKeyId = process.env.AWS_BUCKET_ACCESSKEY;
const region = process.env.AWS_BUCKET_REGION;

const s3 = new S3Client({
  credentials: {
    secretAccessKey: secretAccessKey,
    accessKeyId: accessKeyId,
  },
  region: region,
});

const addingNewProduct = asyncHandler(async (req, res) => {
  const { productName, description, price, category, ratings, Quantity } =
    req.body;

  try {
    const productImageName = await randomImageName();
    const buffer = await sharp(req.file?.buffer)
      .resize({ height: 1920, width: 1080, fit: "contain" })
      .toBuffer();

    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: productImageName,
      Body: buffer,
      ContentType: req.file.mimetype,
    });
    s3.send(command);

    const newProduct = await productModel.create({
      sellerID: req.user._id,
      productImage: productImageName,
      productName,
      description,
      price,
      category,
      ratings,
      Quantity,
    });

    if (newProduct) {
      await sellerModel.updateOne(
        { userId: req.user._id },
        { $push: { products: newProduct._id } }
      );
      return res.status(200).json(newProduct);
    } else {
      return res.status(500).send("Internal Server Error");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

const gettingAllProducts = asyncHandler(async (req, res) => {
  try {
    const Products = await productModel.find();

    if (Products) {
      for (const Product of Products) {
        const getObjectParams = {
          Bucket: bucketName,
          Key: Product.productImage,
        };
        const command = new GetObjectCommand(getObjectParams);
        const url = await getSignedUrl(s3, command);
        Product.productImageUrl = url;
      }
      res.status(200).json(Products);
    } else {
      res.status(500).send("Products Not Found");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: error.message });
  }
});

const getProduct = asyncHandler(async (req, res) => {
  const { productId } = req.params;

  try {
    const product = await productModel.findById(productId);

    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).send("Product Not Found");
    }
  } catch (error) {
    res.status(500).json({ errorMessage: error });
  }
});

export { addingNewProduct, gettingAllProducts, getProduct };
