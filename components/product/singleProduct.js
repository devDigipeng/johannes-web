"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '../../contexts/CartContext';

const SingleProduct = ({image, rating, price, title, product}) => {

    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [showQuantityControls, setShowQuantityControls] = useState(false);
    
  
    const handleAddToCart = () => {
      addToCart(product, quantity);
      setShowQuantityControls(true);
    };
    
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
        setQuantity(quantity - 1);
    } else {
        setShowQuantityControls(false);
    }
  };


  return (
    <div>

        <div className=' rounded-md shadow-md'>
            <Image src={image} alt={title} className="" width={400} height={100} />

            <div className='px-4 py-8 space-y-4'>

            <div className='flex justify-between items-center'>
                <h1 className='font-medium text-2xl'>{title}</h1>
                {showQuantityControls ? (
                        <div className='flex items-center'>
                            <button onClick={decreaseQuantity} className='bg-[#ED3237] rounded-full px-3 py-1 mr-2 text-white'>
                                -
                            </button>
                            <span className='text-lg font-medium'>{quantity} Qty</span>
                            <button onClick={increaseQuantity} className='bg-[#ED3237] rounded-full px-3 py-1 ml-2 text-white'>
                                +
                            </button>
                        </div>
                    ) : (
                        <button onClick={handleAddToCart} className='bg-[#ED3237] rounded-full px-6 py-1 cursor-pointer text-white'>
                            Buy Now
                        </button>
                    )}
                
                
                {/* <botton onClick={handleAddToCart} className="bg-[#ED3237] rounded-full px-6 py-1 cursor-pointer text-white">Buy Now</botton> */}
            </div>
            <div className='flex justify-between'>
                <div className='flex gap-2'>
            {[...Array(rating)].map((_, index) => (
                <Image key={index} src="/star.svg" width={20} height={10} className="flex" />
            ))}
            </div>
          <h2 className='font-bold text-2xl'>₦{price}</h2>
            </div>
            </div>

        </div>

        <div>

        </div>
      
    </div>
  )
}

export default SingleProduct
