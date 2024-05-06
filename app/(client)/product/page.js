import React from 'react';
import Products from './product';

const ProductList = () => {
  const products = [
    {
      id: 1,
      title: 'product 1',
      price: 240,
      rating: 4,
      image: '/loaf.png'
    },
    {
      id: 5,
      title: 'product 2',
      price: 180,
      rating: 5,
      image: '/buger.png'
    },
    {
      id: 99,
      title: 'product 3',
      price: 320,
      rating: 3,
      image: '/loaf.png'
    },
    {
      id: 32,
      title: 'product 4',
      price: 200,
      rating: 4,
      image: '/buger.png'
      
    },
    {
    id: 22,
    title: 'product 4New Shawarna',
    price: 200,
    rating: 4,
    image: '/buger.png'
    
  },
  {
    id: 79,
    title: 'Yummy Burger',
    price: 320,
    rating: 3,
    image: '/loaf.png'
  },
  {
    id: 12,
    title: 'Shawama',
    price: 200,
    rating: 4,
    image: '/buger.png'
    
  },
  {
    id: 26,
    title: 'Big bread Buger',
    price: 320,
    rating: 3,
    image: '/loaf.png'
  },
  ];

  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-2">
      {products.map((product, index) => (
        <Products
          key={index}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductList;
