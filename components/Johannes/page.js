import React from 'react';
import Image from "next/image"
import Product from "../../app/(client)/product/page"
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Testimony from "../../components/testimony"

const Johannes = () => {
  return (
    <div>
      <div className=' m-20 rounded-lg flex justify-around items-center px-64' style={{
                height: "400px",
                backgroundImage: `url(/WebBanner2.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
                <div className=''>
                  <div className="cprimary font-bold text-[58px] leading-[52px] inset">
                  Satisfy Your Sweet Cravings Here!
                  </div>
                  <div className=' text-[#888080] my-4 pr-24'>

                  Savor our artisanal delights, meticulously crafted for an unforgettable dining journey filled with passion and flavor!
                  </div>

                    <botton className="bg-[#ed3237] text-white rounded-full py-2 mt-8 font-medium px-4 ">Shop Now</botton>
                </div>

      </div>


     

        <div className='flex justify-between flex-col md:flex-row md:mx-10'>

        <div className=' flex flex-col space-y-16 md:w-3/12 mx-8'>

              <div className='rounded flex px-10 pt-16  h-[80vh] '  style={{
          
          // width: "350px",
          backgroundImage: `url(/BannerPortrait3.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
                <div className='flex flex-col space-y-2 '>
                  <p className='text-white '>Johannes Foods</p>
                  <h2 className='text-2xl'>Special Meal</h2>
                  <h2 className='text-3xl font-semibold'>Bread Bugger</h2>
                  <div className='flex text-3xl py-4 items-baseline gap-2'><span className='text-white text-[12px]'>from</span> N2000</div>
                  <button className='bg-[red] py-2 px-4 rounded-full text-white'>Order now</button>
                </div>

              </div>
              <div className='rounded flex px-10  pt-16  h-[80vh] '  style={{
          
          // width: "350px",
          backgroundImage: `url(/BannerPortrait2.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
                <div className='flex flex-col space-y-2 '>
                  <p className='text-white '>Johannes Foods</p>
                  <h2 className='text-2xl'>Special Meal</h2>
                  <h2 className='text-3xl font-semibold'>Bread Bugger</h2>
                  <div className='flex text-3xl py-4 items-baseline gap-2'><span className='text-white text-[12px]'>from</span> N2000</div>
                  <button className='bg-[red] py-2 px-4 rounded-full text-white'>Order now</button>
                </div>

              </div>
        </div>

      <div className=''>


        <div className='mx-8'>
          <div className='flex justify-between my-4 '>
            <div className='flex flex-col '>
              <h1 className='text-3xl font-medium mb-2'>First on our Menu</h1>
              <p>Do not miss our hot sale menu</p>
            </div>

            <div>

            <Link href="/" className='border rounded-full px-6 py-2 flex items-center justify-between '>
              View All
              <BsArrowRight className='ml-4'/>
            </Link>
            </div>
          </div>
          <Product />

          <div className='flex gap-8 my-8'>
          <Image src="/Banner1.png" className='rounded-lg ' width={500} height={500} />
          <Image src="/Banner2.png" className='rounded-lg ' width={500} height={500} />
          </div>

        </div>

        </div>


          
      </div>

      <div className='flex justify-between mx-24 my-16'>
        <div className='border rounded-lg p-8 text-center'>
          <Image src="/Snacks2.png" width={300} height={300} />
          <h1 className='text-2xl font-medium'>Tasty Snacks</h1>
          <p>21 Items</p>
        </div>
        <div className='border rounded-lg p-8 text-center'>
          <Image src="/Bread.png" width={300} height={300} />
          <h1 className='text-2xl font-medium'>Sweet and soft Bread</h1>
          <p>21 Items</p>
        </div>
        <div className='border rounded-lg p-8 text-center'>
          <Image src="/Drinks.png" width={300} height={300} />
          <h1 className='text-2xl font-medium'>Chilled Drinks</h1>
          <p>21 Items</p>
        </div>
      </div>

      <Testimony />
    </div>
  )
}

export default Johannes