'use client'
import React, { useState } from 'react';
import logo from './Assets/logo.svg';
import Image from 'next/image';
import profile from './Assets/profile.svg';
import laptop from './Assets/laptop.svg';
import design from './Assets/design.svg';
import menu from './Assets/menu.svg';
import '@/app/globals.css'
export const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <div>
      <div className="flex justify-around ">
        <div
          className="w-full  sm:w-11/12 mx-auto flex  border-black border-4 justify-around"
          style={{ backgroundColor: '#F6F6F6',
        }}
        >
          <div className="w-4 sm:w-full my-1 sm:mr-36  flex items-center ">
            <Image src={logo} alt="" className='w-[40px]' />
            <h1 className="text-base sm:text-xl mx-3 whitespace-nowrap   " style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
              CODE TRANSFORMER
            </h1>
          </div>
          <div className="w-8 sm:w-full invisible sm:visible my-2 sm:mx-10 flex items-center">
            <Image src={laptop} alt="" />
            <h1 className="text-base  whitespace-nowrap">
             <a href='https://github.com/Sumit2701/codetransformer' target='blank'> VIEW REPO</a>
            </h1>
          </div>
          <div className="w-8 sm:w-full invisible sm:visible my-2 sm:mx-10 flex items-center">
            <Image src={design} alt="" />
            <h1 className="text-base sm:text-xl whitespace-nowrap">
             <a href='https://www.figma.com/file/7ZsmGgYVcvZ3xXZCWaVDd8/Code-Transformer-by-SumitAhire-powered-by-openai?type=design&node-id=0%3A1&mode=design&t=9OXhOWT1Fk3Gtq1S-1' target='blank'> VIEW DESIGN</a>
            </h1>
          </div>
          <div className="w-8 sm:w-full invisible sm:visible my-2  sm:mx-10 flex items-center">
            <Image src={profile} alt="" />
            <h1 className="text-base sm:text-xl whitespace-nowrap">
                PORTFOLIO
            </h1>
          </div>
        </div>
        <div className="sm:hidden flex items-center border-4" style={{ backgroundColor: '#F6F6F6' }}>
          <button
            className=" font-bold py-3 px-4"
            onClick={toggleMobileNav}
          >
            <Image src={menu} alt="Menu" />
          </button>
        </div>
      </div>
      {/* Mobile Nav Button */}
      <div className="sm:hidden z-50" style={{ position: 'relative' }}>
  {showMobileNav && (
    <div className="absolute right-0 flex flex-col items-end p-5 border-4 backdrop-blur bg-opacity-20	 bg-gray-200">
      <button className="py-4 px-5 flex items-center hover:bg-gray-300 focus:outline-none">
        <Image src={laptop} alt="" />
        <h1 className="text-base sm:text-xl whitespace-nowrap">
          <span className="hover:underline">VIEW REPO</span>
        </h1>
      </button>
      <button className="py-4 px-5 flex items-center hover:bg-gray-300 focus:outline-none">
        <Image src={design} alt="" />
        <h1 className="text-base sm:text-xl whitespace-nowrap">
          <span className="hover:underline">VIEW DESIGN</span>
        </h1>
      </button>
      <button className="py-4 px-3 flex items-center hover:bg-gray-300 focus:outline-none">
        <Image src={profile} alt="" className="w-8" />
        <h1 className="text-base sm:text-xl whitespace-nowrap">
          <span className="hover:underline">SEE PORTFOLIO</span>
        </h1>
      </button>
    </div>
  )}
</div>

    </div>
  );
};
