const productModel = require("../models/productModel");

exports.getAllProducts = (req, res) => {
  const products = productModel.getProducts();
  res.json(products);
};

exports.getProductById = (req, res) => {
  const productId = parseInt(req.params.id);
  const product = productModel.getProductById(productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
};

exports.addProduct = (req, res) => {
  const newProduct = req.body;
  productModel.addProduct(newProduct);
  res
    .status(201)
    .json({ message: "Product added successful", product: newProduct });
};

exports.updateProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  const updatedProductData = req.body;
  const updatedProduct = productModel.updateProduct(
    productId,
    updatedProductData
  );
  if (updatedProduct) {
    res.json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } else {
    res.status(404).json({ error: "Product not found" });
  }
};

exports.deleteProduct = (req, res) => {
  const productId = parseInt(req.params.id);
  const deletedProduct = productModel.deleteProduct(productId);
  if (deletedProduct) {
    res.status(204).json({ message: "Product deleted successfully", deletedProduct });
  } else {
    res.status(404).json({ error: "Product not found" });
  }
};
