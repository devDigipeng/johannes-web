"use client"
import React, {useState} from 'react';
import { useCart } from '../../../contexts/CartContext';
import { RiDeleteBin2Fill } from "react-icons/ri";

const CartPage = () => {
  const { cartItems, clearCart, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState();

  const totalPrice = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  // const subtotal = item.quantity * item.price

  const generateWhatsAppMessage = () => {
    const message = cartItems.map(item => `${item.title} - Quantity: ${item.quantity}`).join('\n');
    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const totalPriceMessage = `Total Price: ${totalPrice}`;
    const encodedMessage = encodeURIComponent(`${message}\n${totalPriceMessage}`);
    const whatsappUrl = `https://wa.me/+2347030305522?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container md:mx-16  mx-4 py-8 flex justify-between md:flex-row flex-col gap-16">
      <div className='md:w-full mx-4'>
     
      <h1 className="text-3xl font-semibold mb-4">Shopping Cart</h1>
      <div  className="flex justify-between  mb-8 items-center border-b border-gray-300 py-2">
              
              <h2 className="text-1xl font-semibold">Product</h2>
              <p className="text-gray-600 font-medium">Price </p>
              <p className="text-gray-600 font-medium">Qty</p>
              <p className="text-gray-600 font-medium">Subtotal</p>
            
            <div>
              
            </div>
          </div>
      {cartItems.length === 0 ? (
        <p className='text-2xl font-medium'>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex md:justify-between gap-12 items-center border-b   py-4 ">
              
                <h2 className="text-1xl flex flex-wrap font-semibold">{item.title}</h2>
                <p className="text-gray-600">₦{item.price} </p>
                {/* <div>
                <button onClick={decreaseQuantity} className="border border-gray-300 rounded-full px-3 py-1 mr-2">-</button>
        <span>{item.quantity}</span>
        <button onClick={increaseQuantity} className="border border-gray-300 rounded-full px-3 py-1 ml-2">+</button>
                </div> */}
                <p className="text-gray-600">{item.quantity}</p>
                <p className="text-gray-600">₦{item.quantity * item.price}</p>
              
              <div className=''>
                
                <RiDeleteBin2Fill onClick={() => removeFromCart(item.id)} className='text-[red]  rounded-full '/>
              </div>
            </div>
          ))}
          <div className="mt-4 flex  justify-between">
          <p className='hidden md:block'></p>
          <button onClick={clearCart} className="bg-red-500 text-white px-4 py-2 rounded-md mr-4">Clear All</button>
           
          </div>
        </div>
      )}
    </div>

    <div className='border rounded-md md:w-[35%] py-8 px-4 md:mx-2 mx-8 space-y-4'>

      <h1 className='text-2xl font-medium border-b py-4'>Cart Totals</h1>
      <h2 className='font-medium border-b py-4'>Subtotal</h2>
      <div className='flex justify-between items-center border-b py-4'>
        <h2 className='font-medium'>Delivery</h2>
        <div className='items-center space-y-4'>
          <div className='flex gap-4 items-baseline '>
            <p>Within Benin City</p>
            <input type='checkbox'  />
          </div>
          <div className='flex gap-4 items-baseline'>
            <p>Outside Benin City</p>
            <input type='checkbox'  />
          </div>
        </div>
      </div>
      <div className='flex justify-between border-b py-4'>
        <h2 className='font-medium'>Total</h2>
        <h2 className='font-medium text-2xl'>₦{totalPrice}</h2>
      </div>

      <div> <button onClick={generateWhatsAppMessage} className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">Proceed to Checkout</button></div>
    </div>
    </div>
  );
};

export default CartPage;
