import React from 'react';
import Product from '../components/Product';

const Home = ({ products }) => {
  return (
    <div className="home">
      <h2>Welcome to Uzum Market</h2>
      <div className="products">
        {products.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
