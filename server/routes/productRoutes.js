//server/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const { createProduct, getAllProducts } = require('../controllers/productController');
const protect = require('../middleware/authMiddleware');

router.post('/', protect, createProduct);
router.get('/', getAllProducts);

module.exports = router;
