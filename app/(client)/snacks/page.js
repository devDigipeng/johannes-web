'use client'
import React, {useState} from 'react';
import SingleProduct from '../../../components/product/singleProduct';
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";

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
  {
    id: 39,
    title: 'Yummy Burger',
    price: 320,
    rating: 3,
    image: '/product6.png'
  },
  {
    id: 27,
    title: 'New Shawarna',
    price: 200,
    rating: 4,
    image: '/product5.png'
    
  },


  ];
  




const Snacks = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const pageSize = 6; // Number of posts per page

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, products.length);
    const displayedProducts = products.slice(startIndex, endIndex);
    // Function to handle pagination
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };


  return (
    <div>

<div className=' md:m-20 m-4 rounded-lg flex justify-around items-center md:px-64 px-8' style={{
                height: "300px",
                backgroundImage: `url(/WebBanner2.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
                <div className='text-center'>
                  <div className="csecondary font-bold text-[64px] leading-[52px] inset">
                  Taste the Difference
                  </div>
                  <div className=' text-[#888080] my-4 md:pr-24'>

                  Handcrafted Goodness, Every Single Time
                  </div>

                    
                </div>

      </div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-24 px-8">
{displayedProducts.map((product) => (
                    <SingleProduct
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        rating={product.rating}
                        image={product.image}
                        product={product}
                    />
                ))}
    </div>
      {/* Pagination */}
      <div className="flex justify-between my-8 md:px-24 px-8">
        <div>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded flex items-center space-x-2 font-bold ${
              currentPage === 1
                ? "bg-[#F7F7F7] cursor-not-allowed"
                : "bg-[#F7F7F7] text-black text-bold"
            }`}
          >
            <IoMdArrowRoundBack />
            <span>Prev</span>
          </button>
        </div>

        <div className="flex ">
          {[...Array(Math.ceil(products.length / pageSize)).keys()].map(
            (pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber + 1)}
                className={`mx-1 px-3 py-1 rounded ${
                  currentPage === pageNumber + 1
                    ? "bg-[#ed3237] text-white"
                    : "bg-white"
                }`}
              >
                {pageNumber + 1}
              </button>
            )
          )}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(products.length / pageSize)}
            className={`px-3 py-1 rounded flex items-center space-x-2 font-bold ml-4 ${
              currentPage === Math.ceil(products.length / pageSize)
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#F7F7F7] text-black"
            }`}
          >
            <span>Next </span>
            <IoMdArrowRoundForward />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Snacks;