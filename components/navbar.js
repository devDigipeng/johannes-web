"use client"
import React, {useState} from 'react';
import Link from 'next/link';
import Image from "next/image";
import{ useCart } from '../contexts/CartContext';
import { BsCart3 } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { TfiClose } from "react-icons/tfi";
import { FiPhoneCall } from "react-icons/fi"


const navlist = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "About Us",
    path: "/about-us",
  },
  {
    text: "Service",
    path: "/#service",
  },
  {
    text: "Blog",
    path: "/blog",
  },
  
  {
    text: "Contact",
    path: "/contact",
  },
];



const Navigation = () => {
  const { cartItems } = useCart();
  const [showNav, setShowNav] = useState(false);

  const whenActive = usePathname();

  const navBarList = navlist.filter((element) => element.path !== "/contact");

  return (
    <nav >
      <div className="flex justify-between items-center py-4 px-8 text-gray-800">

      <Link className="text-xl font-semibold" href="/">
        <Image src="/logo.png" width={100} height={25}/>
      </Link>
      <div className="relative">
        <Link href="/cart" className='border rounded-full'>
          
        <BsCart3 />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-5 w-5 flex justify-center items-center text-xs">
                {cartItems.length}
              </span>
            )}
          
        </Link>
      </div>
      </div>


      <header className="bg-white sticky top-0 bottom-0 z-40 py-4 ">
      <div className="flex justify-between items-center mx-auto max-w-[1536px] w-[90%]">
        

        {/* Desktop View */}
        <div className="">
          <ul className="lg:flex hidden justify-around gap-6 items-center">
            {navBarList.map((list, index) => (
              <Link href={list.path} key={index}>
                <li
                  className={
                    whenActive === list.path
                      ? "text-[16px] font-bold"
                      : "text-[16px]"
                  }
                  key={index}
                >
                  {list.text}
                </li>
              </Link>
            ))}
            <Link href="/contact">
              <button className="bg-[#024d91] rounded-md text-white px-3 py-2">
                Our Menu
              </button>
            </Link>
          </ul>
          <div onClick={() => setShowNav(!showNav)} className="lg:hidden">
            {/* <MenuIcon  /> */}
            <HiOutlineMenuAlt3 className="text-[40px]" />
          </div>
        </div>

        <Link href="/">
          <div>
            <FiPhoneCall />
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
              ? "h-screen fixed left-0 top-0 bg-white w-[75%] sm-w-[35%] ease-in duration-500"
              : "fixed left-[-100%] top-0 ease-in duration-500 "
          }
        >
          <div className="flex flex-col gap-9">
            <div
              onClick={() => setShowNav(!showNav)}
              className="flex  flex-row-reverse w-full py-4 px-3"
            >
              <TfiClose className="text-[30px] align-right" />
            </div>
            <div className="">
              <ul className="flex flex-col gap-6 px-5">
                {navBarList.map((list, index) => (
                  <Link
                    href={list.path}
                    key={index}
                    onClick={() => setShowNav(false)}
                  >
                    <li
                      className={
                        whenActive === list.path
                          ? "text-[16px] font-bold"
                          : "text-[16px]"
                      }
                      key={index}
                    >
                      {list.text}
                    </li>
                  </Link>
                ))}
                <Link href="/contact">
                  <button
                    className="bg-[#024d91] rounded-sm text-white px-3 py-2"
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
