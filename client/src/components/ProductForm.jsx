//client/src/components/ProductForm.jsx
import React, { useState } from 'react';
import VariantSelector from './VariantSelector';
import axios from 'axios';

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    variants: [{ size: 'M', color: '', type: 'T-Shirt' }],
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleVariantChange = (field, value) => {
    const updated = [...product.variants];
    updated[0][field] = value;
    setProduct({ ...product, variants: updated });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/products', product, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Product created successfully!');
    } catch {
      alert('Failed to create product');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-4">
      <input name="name" placeholder="Product Name" onChange={handleChange} className="border p-2 w-full" />
      <textarea name="description" placeholder="Description" onChange={handleChange} className="border p-2 w-full" />
      <input name="price" type="number" placeholder="Price" onChange={handleChange} className="border p-2 w-full" />
      <VariantSelector variant={product.variants[0]} onChange={handleVariantChange} />
      <button type="submit" className="bg-purple-600 text-white px-4 py-2 w-full">Create Product</button>
    </form>
  );
};

export default ProductForm;
