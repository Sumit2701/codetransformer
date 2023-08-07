'use client'
import Image from 'next/image';
import styles from '../app/globals.css';
import down from '../components/Assets/down.svg'
import { useState } from 'react';

export default function Home() {
  const [gpt, setGpt] = useState('gpt3.5');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = (value) => {
    setGpt(value);
    setShowDropdown(false); // Hide the dropdown after selection
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleGptVersion = () => {
    setGpt(gpt === 'gpt3.5' ? 'gpt4' : 'gpt3.5');
  };

  return (<div className='  '  id='api'> 
    <div className='  md:flex     uppercase' id='api'>


     <div
        className='border-black border-4 md:h-20 md:mx-16 mx-auto md:w-1/2  flex justify-center items-center mt-5  '
        style={{
          backgroundColor: '#F6F6F6',
        }}
      >
        <input
          className='text-base md:text-2xl border-2'
          id='api'
          placeholder='ENTER YOUR API KEY..'
        />
      </div>


      <div className='md:flex md:w-1/2 justify-between items-center  md:mx-16  mt-5  md:h-20'>
      <div className='flex  md:w-full justify-center '>
      <div
        className='border-black  border-4  md:h-20 w-1/2 md:w-full  flex bg-gray-300   justify-center items-center  '
        
      >
        <button className='  text-xs md:text-2xl ' id='api'>
          TRANSLATE
        </button>
      </div></div>
      
      
      
      <div className='flex md:h-20 md:w-full  justify-center'>
      <div
        className='border-black border-4 md:my-0 my-2 md:ml-4 md:w-full w-1/2 flex justify-center items-center  '
        style={{
          backgroundColor: '#F6F6F6',
        }}
      >
        <div className='relative'>
          <button
            className='text-base md:text-2xl uppercase items-center flex'
            onClick={toggleDropdown}
            id='api'
          >
            {gpt}
            <Image src={down} className='w-5 m-2'/>
          </button>
          {showDropdown && (
            <div className='absolute mt-2'>
              <ul className='bg-white border rounded shadow-md'>
                <li
                  className='cursor-pointer px-4 py-2 hover:bg-gray-100'
                  onClick={() => handleDropdownClick('gpt3.5')}
                >
                  gpt3.5
                </li>
                <li
                  className='cursor-pointer px-4 py-2 hover:bg-gray-100'
                  onClick={() => handleDropdownClick('gpt4')}
                >
                  gpt4
                </li>
              </ul>
            </div>
          )}
        </div>
      </div></div></div>
      
      
      
      </div>
      <div className='flex w-full'>
        <div>
            <div>
            <div
        className='border-black border-4 h-10  flex justify-center items-center mt-5 mx-2'
        style={{
          backgroundColor: '#F6F6F6',
        }}
      >
        <div className='relative'>
          <button
            className='text-base md:text-2xl uppercase'
            onClick={toggleDropdown}
            id='api'
          >
            {gpt}
          </button>
          {showDropdown && (
            <div className='absolute mt-2'>
              <ul className='bg-white border rounded shadow-md'>
                <li
                  className='cursor-pointer px-4 py-2 hover:bg-gray-100'
                  onClick={() => handleDropdownClick('gpt3.5')}
                >
                  gpt3.5
                </li>
                <li
                  className='cursor-pointer px-4 py-2 hover:bg-gray-100'
                  onClick={() => handleDropdownClick('gpt4')}
                >
                  gpt4
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
            </div>
            <div></div>
        </div>
        
      </div>
   
   
    </div>
  );
}