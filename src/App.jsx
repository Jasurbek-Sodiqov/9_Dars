import React, { useState, useEffect } from 'react';
import Home from './pages/Home';

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://api.dummyjson.com/v1/products')
      .then(response => response.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div className="App">
      <Home products={products} />
    </div>
  );
}

export default App;
