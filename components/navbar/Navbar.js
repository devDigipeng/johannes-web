"use client"
import React, {useState} from 'react';
import Link from 'next/link';
import Image from "next/image";
import{ useCart } from '../../contexts/CartContext';
import { useRouter } from 'next/navigation';
import { BsCart3 } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { TfiClose } from "react-icons/tfi";
import { CiSearch } from "react-icons/ci";


const navlist = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "Shop All",
    path: "/shop",
  },
  {
    text: "Contact Us",
    path: "/contact",
  },
  

];



const Navigation = () => {
  const { cartItems } = useCart();
  const [showNav, setShowNav] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
    const router = useRouter();

    // const totalPrice = cartItems.reduce((total, item) => {
    //   return total + (item.price * item.quantity);
    // }, 0);

    const handleSearch = (e) => {
        e.preventDefault();
        router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    };


  const whenActive = usePathname();

  const navBarList = navlist.filter((element) => element.path !== "/menu");

  return (
    <nav >
      <div className="flex justify-between items-center py-4 md:px-20 px-6">

      <Link className="text-xl font-semibold  " href="/">
        <Image src="/logo.png" width={150} height={25}/>
      </Link>

      <div className='w-1/3'>
      <form onSubmit={handleSearch} className='flex justify-between items-center w-full  hidden md:inline-block  bg-[#90A0B01A] border rounded-full py-2 px-4'>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for products"
                    className="bg-transparent focus:outline-none w-11/12"
                />
                
                <button type="submit" className=" pl-2 text-xl"><CiSearch /></button>
            </form>

      </div>


      <div className="flex gap-4 items-center">

      {/* <h2 className='font-bold text-2xl'>₦{totalPrice}</h2> */}
      <div className='relative'>

        <Link href="/cart" className=' '>

          <Image src="/cart.svg" width={30} height={30} />
      
            {cartItems.length > 0 && (
              <span className="absolute bottom-5 left-5 bg-red-500 text-white rounded-full h-5 w-5 flex justify-center items-center text-xs">
                {cartItems.length}
              </span>
            )}
          
        </Link>
      </div>
      </div>
      </div>


      <header className="bg-white sticky top-0 bottom-0 z-40 py-4 ">
      <div className="flex justify-between items-center mx-auto max-w-[1536px] w-[90%]">
        

        {/* Desktop View */}
        <div className="">

       


          <ul className="lg:flex hidden justify-around gap-6 items-center">
            <div className='mr-32'>


          <Link href="/menu ">
              <button className="bg-[#ED32371A] rounded-full  text-[#ed3237] font-bold  px-6 py-2 ">
                Our Menu
              </button>
            </Link>
            </div>

            {navBarList.map((list, index) => (
              <Link href={list.path} key={index}>
                <li
                  className={
                    whenActive === list.path
                      ? "text-[16px] font-bold text-[#ed3237] inline-block border-b-2 border-[#ed3237]"
                      : "text-[16px] font-medium 1xl"
                  }
                  key={index}
                >
                  {list.text}
                </li>
              </Link>
            ))}
            
          </ul>

          <div onClick={() => setShowNav(!showNav)} className="lg:hidden">
            {/* <MenuIcon  /> */}
            <HiOutlineMenuAlt3 className="text-[40px]" />

          </div>
          
        </div>

        <Link href="/">
          <div className='flex gap-2'>
            <Image src='/phone.svg' width={20} height={20} />
            <span className='font-bold text-1xl'>+123947789</span>
          </div>
        </Link>

      </div>

      {/* Mobile View */}
      <div
        className={
          showNav
            ? "lg:hidden w-full h-screen fixed left-0 top-0 bg-black/70"
            : ""
        }
      >
        <div
          className={
            showNav
              ? "h-screen fixed left-0 top-0 bg-[#f58634] w-[75%] sm-w-[35%] ease-in duration-500"
              : "fixed left-[-100%] top-0 ease-in duration-500 "
          }
        >
          <div className="flex flex-col gap-9">
            <div
              onClick={() => setShowNav(!showNav)}
              className="flex  flex-row-reverse w-full py-8 px-6"
            >
              <TfiClose className="text-[30px] align-right text-white" />
            </div>
            <div className="">
            <form onSubmit={handleSearch} className='flex justify-between items-center mx-4  text-white mb-4 border rounded-full py-2 px-4'>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for products"
                    className="bg-transparent focus:outline-none w-11/12 text-white"
                />
                
                <button type="submit" className=" pl-2 text-xl"><CiSearch /></button>
            </form>
              <ul className="flex flex-col gap-6 px-8">
                {navBarList.map((list, index) => (
                  <Link
                    href={list.path}
                    key={index}
                    onClick={() => setShowNav(false)}
                  >
                    <li
                      className={
                        whenActive === list.path
                          ? "text-[16px] font-bold text-white"
                          : "text-[16px] text-white font-medium"
                      }
                      key={index}
                    >
                      {list.text}
                    </li>
                  </Link>
                ))}
                <Link href="/menu">
                  <button
                    className="bg-[#ed3237] rounded-full text-white font-bold px-8 py-2"
                    onClick={() => setShowNav(false)}
                  >
                    Our Menu
                  </button>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    </nav>
   
  );
};

export default Navigation;
