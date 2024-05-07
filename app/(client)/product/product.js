"use client"
import React, {useState} from 'react';
import Image from "next/image";
import { useCart } from '../../../contexts/CartContext';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";



const Product = ({ product }) => {
  
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="bg-white p-2 border rounded-lg transition duration-100 hover:shadow-lg">
      <div className="relative mb-4">
        <Image
          src={product.image}
          alt={product.title}
          width={250}
          height={200}
          className="w-full h-64 object-cover rounded-md transition duration-300 transform hover:scale-105"
        />

        
        <span className="absolute top-2 left-2 bg-[red] font-medium text-white px-2 py-1 rounded-md">
        ₦{product.price}
        </span>
      </div>
      <div className='px-2 flex flex-col justify-between items-stretch'>
      <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
      <div className="flex items-center mb-2">
        {/* <span className="text-gray-600 mr-1">Rating:</span> */}
        <div className="flex">
          {[...Array(product.rating)].map((_, index) => (
            <Image key={index} src="/star.svg" width={10} height={10} className="" />
          ))}
        </div>
        </div>

        <div className="flex items-center mb-2">
          <span className="text-gray-600 mr-4">Qty:</span>
         <button onClick={decreaseQuantity} className="border border-gray-300 rounded-l-full px-2 py-1 mr-4 hover:bg-[red] hover:text-white"><FaMinus size={10} /></button>
         <span>{quantity}</span>
          <button onClick={increaseQuantity} className="border border-gray-300 rounded-r-full px-3 py-1 ml-4 hover:bg-[red] hover:text-white"><FaPlus size={10} /></button>
        </div>
      
         <button onClick={handleAddToCart} className="bg-blue-500 w-full  text-white py-1 my-4 px-4 rounded-full hover:bg-blue-600 transition duration-300">
           Add to Cart
          </button>
      </div>
    </div>
  );
};

export default Product;
