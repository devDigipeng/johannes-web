import React from 'react'
import Image from 'next/image'
import { IoFastFoodOutline } from "react-icons/io5";
import { MdDeliveryDining } from "react-icons/md";
import { TbDiscount2 } from "react-icons/tb";
import { TbMoneybag } from "react-icons/tb";
import Link from 'next/link'


const CTA = () => {
  return (
    <div>
        <div className='bg-[#F58634] mb-8 '>
            <div className='flex justify-between flex-col md:flex-row pt-16 pl-16'>

            <div className='flex flex-col md:w-1/2 py-8 space-y-4 pr-8 md:pl-12 '>
                <h1 className='text-white text-5xl font-semibold'>Get 20% discount on your first order</h1>
                <p className='text-[#e4e5ee] leading-16'>Craving delicious food delivered straight to your doorstep? Look no further! At Johannes, we are thrilled to welcome you with open arms and a special treat: a 20% discount on your very first order</p>
                <Link href="/shop" className='bg-white w-64 rounded-full py-4 font-semibold text-center text-[#F58634]'>Start your order now</Link>

            </div>
            <div>
                <Image src="/coupon.png" width={600} height={40} />
            </div>

            </div>
        </div>

    <div className='container mx-auto flex flex-wrap space-y-8 items-center justify-between'>
      <div>

      </div>
  <div className='w-full sm:w-1/2 lg:w-1/4 mb-4'>
    <div className='flex justify-center gap-4 items-center border-r pr-8 font-medium'>
      <Image src='/icon1.svg' width={30} height={30}/>
      <p className='text-[#1F1F1F] text-2xl font-medium'>Quality Food</p>
    </div>
  </div>
  <div className='w-full sm:w-1/2 lg:w-1/4 mb-4'>
    <div className='flex justify-center gap-4 items-center border-r pr-8 font-medium'>
    <Image src='/icon2.svg' width={30} height={30}/>
      <p className='text-[#1F1F1F] text-2xl font-medium'>Premium Serve</p>
    </div>
  </div>
  <div className='w-full sm:w-1/2 lg:w-1/4 mb-4'>
    <div className='flex justify-center gap-4 items-center border-r pr-8 font-medium'>
    <Image src='/icon3.svg' width={30} height={30}/>
      <p className='text-[#1F1F1F] text-2xl font-medium'>Fast Delivery</p>
    </div>
  </div>
  <div className='w-full sm:w-1/2 lg:w-1/4 mb-4'>
    <div className='flex justify-center gap-4 items-center border-r pr-8 font-medium'>
    <Image src='/icon4.svg' width={30} height={30}/>
      <p className='text-[#1F1F1F] text-2xl font-medium'>24/7 service</p>
    </div>
  </div>
</div>
    </div>


  )
}

export default CTA