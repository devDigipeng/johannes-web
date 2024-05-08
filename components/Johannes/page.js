import React from 'react';
import Image from "next/image"
import Product from "../../app/(client)/product/page"
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Testimony from "../../components/testimony"
import HomeProduct from '../../app/(client)/product/homeProduct'


const Johannes = () => {


  return (
    <div>
      <div className=' md:m-20 m-4 rounded-lg flex justify-around items-center md:px-64 px-8' style={{
                height: "400px",
                backgroundImage: `url(/WebBanner2.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
                <div className='text-center'>
                  <div className="cprimary font-bold md:text-[64px] text-3xl md:leading-[52px] inset">
                  Satisfy Your Sweet Cravings Here!
                  </div>
                  <div className=' text-[#888080] my-6 md:pr-24  '>

                  Savor our artisanal delights, meticulously crafted for an unforgettable dining journey filled with passion and flavor!
                  </div>

                    <Link href='/shop' className="bg-[#ed3237] text-white rounded-full py-2 mt-8 font-medium px-4 ">Shop Now</Link>
                </div>

      </div>

      


     

        {/* <div className='flex justify-between flex-col md:flex-row md:mx-10'>

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

    
        </div>

        </div>


          
      </div> */}

      {/* <div className='flex justify-between mx-24 my-16'>
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
      </div> */}

      <div className='flex flex-col md:flex-row space-y-8 justify-between items-center md:mx-24 mx-8'>
        <div className='flex '>

        <Image src='/loaf.jpg' className='rounded-lg mb-4'  width={600} height={100}/>
        </div>
        <Image src='/beef.jpg' className='rounded-lg' width={600} height={100}/>

        {/* <Image src='/backer.png'  width={350} height={100}/> */}
      </div>

      <div className='flex flex-col justify-center items-center '>
        <div className='text-center my-8'>
          <h2 className='font-bold text-4xl mb-2'>First on our Menu</h2>
          <p className='md:px-8 text-[#1F1F1F] '>
            Begin your flavor adventure with our <strong>First Bites</strong> selection. 
            From appetizers <br></br>to signature dishes, each one bursts with 
            taste. Come explore and savor <br></br> the difference!
          </p>
        </div>

        <HomeProduct />

        <div>

            <Link href="/" className='border bg-[#ED3237] text-white rounded-full hover:bg-blue-600 transition duration-300 px-12 py-4 flex items-center justify-between  my-12'>
              View All
              <BsArrowRight className='ml-4'/>
            </Link>
            </div>
      </div>

      <Testimony />
    </div>
  )
}

export default Johannes
