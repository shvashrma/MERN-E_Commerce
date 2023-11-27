import productModel from "../Model/productModel.js";
import asyncHandler from "express-async-handler";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import crypto from "crypto";
import sharp from "sharp";

const s3 = new S3Client({
  credentials: {
    secretAccessKey: process.env.AWS_BUCKET_SECRET_ACCESSKEY,
    accessKeyId: process.env.AWS_BUCKET_ACCESSKEY,
  },
  region: process.env.AWS_BUCKET_REGION,
});

const randomImageName = async (bytes = 32) =>
  await crypto.randomBytes(bytes).toString("hex");

const addingNewProduct = asyncHandler(async (req, res) => {
  const { productName, description, price, category, ratings, Quantity } =
    req.body;

  try {
    const productImageName = await randomImageName();
    const buffer = await sharp(req.file?.buffer)
      .resize({ height: 1920, width: 1080, fit: "contain" })
      .toBuffer();

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: productImageName,
      Body: buffer,
      ContentType: req.file.mimetype,
    });
    s3.send(command);

    const newProduct = await productModel.create({
      sellerID: req.user,
      productImage: productImageName,
      productName,
      description,
      price,
      category,
      ratings,
      Quantity,
    });

    if (newProduct) {
      res.status(200).send("Successfully Product Created").json(newProduct);
    } else {
      res.status(500).send("Internal Server Error");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorMessage: error.message });
  }
});

const gettingAllProducts = asyncHandler(async (req, res) => {
  try {
    const Products = await productModel.find();

    if (Products) {
      res.status(200).json(Products);
    } else {
      res.status(500).send("Products Not Found");
    }
  } catch (error) {
    res.status(500).json({ errorMessage: error });
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
