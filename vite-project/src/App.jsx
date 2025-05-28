// src/App.jsx
import React, { useState, useEffect } from 'react';
// CORRECTED IMPORT PATH for ProductCard.jsx
import ProductCard from './components/ProductCard.jsx'; // <--- This is the key change!

// ThemeApp component (as previously provided)
function ThemeApp() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? 'black' : 'white';
  }, [isDark]);

  return (
    <div style={{ color: isDark ? 'white' : 'black', padding: '20px' }}>
      <h1>{isDark ? 'Dark Mode' : 'Light Mode'}</h1>
      <button onClick={() => setIsDark(!isDark)}>Toggle Theme</button>
    </div>
  );
}

// ProductDisplayApp component (as previously provided)
function ProductDisplayApp() {
  return (
    <div className='product-grid' style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', padding: '20px' }}>
      <ProductCard
        title="iPhone 14 Pro"
        price="120000"
        image="https://via.placeholder.com/150/0000FF/FFFFFF?text=iPhone"
        rating="4.8"
      />

      <ProductCard
        title="MacBook Air M2"
        price="150000"
        image="https://via.placeholder.com/150/FF0000/FFFFFF?text=MacBook"
        rating="4.9"
      />
    </div>
  );
}

// Main App component that combines ThemeApp and ProductDisplayApp
function App() {
  return (
    <div>
      <ThemeApp />
      <ProductDisplayApp />
    </div>
  );
}

export default App;