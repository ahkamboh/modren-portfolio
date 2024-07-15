"use client"
import React, { useState } from 'react';
import Image from 'next/image';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="list-none flex justify-between p-5">
          <div className="">
            <img src="/logo.svg"  alt="Nav Logo" className='w-[60px]' />
          </div>
          <div className="sm:flex hidden gap-5 ClashDisplay-Regular">
            <li className=' text-white hover:text-blue-500 transition-colors duration-300'><a href="">Home</a></li>
            <li className='text-white hover:text-blue-500 transition-colors duration-300'><a href="">About</a></li>
            <li className='text-white hover:text-blue-500 transition-colors duration-300'><a href="">Work</a></li>
            <li className='text-white hover:text-blue-500 transition-colors duration-300'><a href="">Contact</a></li>
          </div>
          <div className="flex gap-2 ClashDisplay-Semibold justify-center items-center">
            <li>
              <span
                className='sm:hidden block cursor-pointer text-white hover:text-blue-500 transition-colors duration-300'
                onClick={toggleMenu}
              >
                Menu
              </span>
              <a className='sm:block hidden text-white hover:text-blue-500 transition-colors duration-300' href="">Resume</a>
            </li>
            <li className='sm:block hidden'>
              <Image
                src="/download.svg"
                width={12}
                height={12}
                alt="resume icon"
                className='sm:block hidden'
              />
            </li>
          </div>
        </div>

        <div
          onClick={toggleMenu}
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } sm:hidden h-screen absolute top-0 z-40 items-center justify-center list-none w-full transition-opacity duration-500 ease-in-out`}
          style={{
            backdropFilter: 'blur(5px)',
            backgroundColor: 'rgba(154, 130, 130, 0.21)',
            opacity: menuOpen ? 1 : 0
          }}
        >
          <li className='text-white rotate-45 absolute top-10 right-10 hover:bg-black transition-colors duration-100 rounded-full p-1 bg-transparent '><img src="/cross.svg" alt="" /></li>
          <div className="space-y-5 text-center text-xl ClashDisplay-Regular w-full relative">
            <li className='text-white hover:text-blue-500 transition-colors duration-300'><a href="">Home</a></li>
            <li className='text-white hover:text-blue-500 transition-colors duration-300'><a href="">About</a></li>
            <li className='text-white hover:text-blue-500 transition-colors duration-300'><a href="">Work</a></li>
            <li className='text-white hover:text-blue-500 transition-colors duration-300'><a href="">Contact</a></li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
