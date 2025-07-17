//server/models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  variants: [
    {
      size: String,
      color: String,
      type: String
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
