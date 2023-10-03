import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Product = () => {
  const data = useLoaderData();
  const productData = data.data;
  console.log(productData);
  return <div>products</div>;
};

export default Product;
