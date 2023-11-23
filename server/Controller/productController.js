import productModel from "../Model/productModel.js";
import asyncHandler from "express-async-handler";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: process.env.AWS_BUCKET_REGION,
  credentials: {
    secretAccessKey: process.env.AWS_BUCKET_SECRET_ACCESSKEY,
    accessKeyId: process.env.AWS_BUCKET_ACCESSKEY,
  },
});

const addingNewProduct = asyncHandler(async (req, res) => {
  const {
    productImage,
    productName,
    description,
    price,
    category,
    ratings,
    Quantity,
  } = req.body;

  const productMulterImage = req.file;

  try {
    const command = new PutObjectCommand({
        Bucket : process.env.AWS_BUCKET_NAME,
        Key : req.file.originalname,
        Body : req.file.buffer,
        ContentType : req.file.mimetype
    })

    s3.send(command)

    const newProduct = await productModel.create({
      sellerID: req.user,
      productImage,
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
    res.status(500).json({ errorMessage: error });
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
