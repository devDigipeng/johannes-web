import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Menu = () => {
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
        <div className='flex justify-between md:flex-row flex-col mb-16 mx-24 my-24 '>
        <div className='border bg-[#ed3237] rounded-lg p-8 text-center flex flex-col mb-4 justify-between'>
          <Image src="/Snacks2.png" width={250} height={100} />
          <h1 className='text-2xl font-medium text-white'>Tasty Snacks</h1>
          <p className='text-white'>21 Items</p>
          <Link href='/snacks' className='bg-white text-[#ed3237] py-2 my-4 rounded-full'> Shop Now </Link>
        </div>
        <div className='border bg-[#ed3237] rounded-lg p-8 text-center mb-4  flex flex-col justify-between'>
          <Image src="/Bread.png" width={300} height={300} />
          <div>

          <h1 className='text-2xl font-medium text-white'>Sweet and Soft Bread</h1>
          <p className='text-white'>21 Items</p>
          </div>
          <Link href='/bread' className='bg-white text-[#ed3237] py-2 my-4 rounded-full'> Shop Now </Link>
        </div>
        <div className='border bg-[#ed3237] rounded-lg p-8 text-center mb-4  flex flex-col justify-between'>
          <Image src="/Drinks.png" width={300} height={300} />
          <div>

          <h1 className='text-2xl font-medium text-white'>Chilled Drinks</h1>
          <p className='text-white'>21 Items</p>
          </div>
          <Link href='/drinks' className='bg-white text-[#ed3237] py-2 my-4 rounded-full'> Shop Now </Link>
        </div>
      </div>
    </div>
    

)
}

export default Menu;