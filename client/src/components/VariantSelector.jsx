//client/src/components/VariantSelector.jsx
import React from 'react';

const VariantSelector = ({ variant, onChange }) => {
  return (
    <div className="space-y-4">
      <div>
        <label>Size:</label>
        <select value={variant.size} onChange={(e) => onChange('size', e.target.value)} className="border p-2 w-full">
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </div>
      <div>
        <label>Color:</label>
        <input type="text" value={variant.color} onChange={(e) => onChange('color', e.target.value)} className="border p-2 w-full" />
      </div>
      <div>
        <label>Type:</label>
        <select value={variant.type} onChange={(e) => onChange('type', e.target.value)} className="border p-2 w-full">
          <option value="T-Shirt">T-Shirt</option>
          <option value="Hoodie">Hoodie</option>
          <option value="Sweatshirt">Sweatshirt</option>
        </select>
      </div>
    </div>
  );
};

export default VariantSelector;
