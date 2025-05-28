// src/components/ProductCard.jsx
import React from 'react';

function ProductCard({ title, price, image, rating }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '20px',
      textAlign: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <img src={image} alt={title} style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px', marginBottom: '10px' }} />
      <h3>{title}</h3>
      <p>Price: ₹{price}</p>
      <p>Rating: {rating} / 5</p>
      <button style={{
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: '10px 15px',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;