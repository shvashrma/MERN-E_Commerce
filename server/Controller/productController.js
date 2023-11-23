import productModel from "../Model/productModel.js";
import asyncHandler from "express-async-handler";

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

  try {
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
