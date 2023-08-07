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
      <div className="flex justify-between ">
        <div
          className="w-full md:w-11/12 mx-auto flex px-5 border-black border-4"
          style={{ backgroundColor: '#F6F6F6',
        }}
        >
          <div className="w-8 md:w-full my-2 md:mr-60  flex items-center ">
            <Image src={logo} alt="" />
            <h1 className="text-base md:text-3xl mx-3 whitespace-nowrap   " style={{textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>
              CODE TRANSFORMER
            </h1>
          </div>
          <div className="w-8 md:w-full invisible md:visible my-2 md:mx-10 flex items-center">
            <Image src={laptop} alt="" />
            <h1 className="text-base md:text-xl whitespace-nowrap">
              VIEW REPO
            </h1>
          </div>
          <div className="w-8 md:w-full invisible md:visible my-2 md:mx-10 flex items-center">
            <Image src={design} alt="" />
            <h1 className="text-base md:text-xl whitespace-nowrap">
              VIEW DESIGN
            </h1>
          </div>
          <div className="w-8 md:w-full invisible md:visible my-2  md:mx-10 flex items-center">
            <Image src={profile} alt="" />
            <h1 className="text-base md:text-xl whitespace-nowrap">
              CHECK  PORTFOLIO
            </h1>
          </div>
        </div>
        <div className="md:hidden flex items-center border-4" style={{ backgroundColor: '#F6F6F6' }}>
          <button
            className=" font-bold py-3 px-4"
            onClick={toggleMobileNav}
          >
            <Image src={menu} alt="Menu" />
          </button>
        </div>
      </div>
      {/* Mobile Nav Button */}
      {/* Additional Divs for Mobile */}
      <div className="md:hidden" style={{ position: 'relative' }}>
  {showMobileNav && (
    <div className="absolute right-0 flex flex-col items-end p-5 border-4 ">
      <button className="py-4 px-5 flex items-center hover:bg-gray-300 focus:outline-none">
        <Image src={laptop} alt="" />
        <h1 className="text-base md:text-xl whitespace-nowrap">
          <span className="hover:underline">VIEW REPO</span>
        </h1>
      </button>
      <button className="py-4 px-5 flex items-center hover:bg-gray-300 focus:outline-none">
        <Image src={design} alt="" />
        <h1 className="text-base md:text-xl whitespace-nowrap">
          <span className="hover:underline">VIEW DESIGN</span>
        </h1>
      </button>
      <button className="py-4 px-3 flex items-center hover:bg-gray-300 focus:outline-none">
        <Image src={profile} alt="" className="w-8" />
        <h1 className="text-base md:text-xl whitespace-nowrap">
          <span className="hover:underline">SEE PORTFOLIO</span>
        </h1>
      </button>
    </div>
  )}
</div>

    </div>
  );
};
