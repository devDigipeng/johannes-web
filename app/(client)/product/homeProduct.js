import React from 'react';
import Products from './product';
import SingleProduct from '../../../components/product/singleProduct'

const HomeProduct = () => {
  const products = [
    {
      id: 1,
      title: 'Bread Burger',
      price: 240,
      rating: 4,
      image: '/product1.png'
    },
    {
      id: 5,
      title: 'Shawarma',
      price: 180,
      rating: 5,
      image: '/product2.png'
    },
    {
      id: 99,
      title: 'Chillded Drink',
      price: 320,
      rating: 3,
      image: '/prodcut3.png'
    },
    {
      id: 32,
      title: 'Burger Bread',
      price: 200,
      rating: 4,
      image: '/product4.png'
      
    },
    {
    id: 22,
    title: 'New Shawarna',
    price: 200,
    rating: 4,
    image: '/product5.png'
    
  },
  {
    id: 79,
    title: 'Yummy Burger',
    price: 320,
    rating: 3,
    image: '/product6.png'
  },


  ];

  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, id) => (

        <div key={id} className='mb-4'>

        <SingleProduct
          
          rating={product.rating}
          title={product.title}
          image={product.image}
          price={product.price}
          product={product}
          
          />
          </div>
      ))}
    </div>
  );
};

export default HomeProduct;
