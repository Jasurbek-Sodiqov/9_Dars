import React from 'react';

const Product = ({ id, name, price, description }) => {
  return (
    <div className="product">
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>{description}</p>
    </div>
  );
}

export default Product;
