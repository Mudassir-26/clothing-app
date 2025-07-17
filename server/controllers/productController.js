//server/controllers/productController.js
const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  const { name, description, price, variants } = req.body;
  const product = new Product({ name, description, price, variants });
  await product.save();
  res.status(201).json(product);
};

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};
