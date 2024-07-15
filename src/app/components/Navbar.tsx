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
          <div className="w-[60px] ">
            <svg width="65" height="20" viewBox="0 0 99 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1_996)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.4375 16.5C7.69158 16.5 6.97621 16.2037 6.44876 15.6762C5.92132 15.1488 5.625 14.4334 5.625 13.6875V0.75H0V13.6875C0 18.3472 3.77775 22.125 8.4375 22.125H14.625V16.5H8.4375ZM25.3125 6.375C24.6477 6.375 23.9894 6.50595 23.3752 6.76036C22.761 7.01477 22.2029 7.38768 21.7328 7.85777C21.2627 8.32787 20.8898 8.88595 20.6354 9.50016C20.3809 10.1144 20.25 10.7727 20.25 11.4375C20.25 12.1023 20.3809 12.7606 20.6354 13.3748C20.8898 13.989 21.2627 14.5471 21.7328 15.0172C22.2029 15.4873 22.761 15.8602 23.3752 16.1146C23.9894 16.3691 24.6477 16.5 25.3125 16.5C26.6552 16.5 27.9428 15.9666 28.8922 15.0172C29.8416 14.0678 30.375 12.7802 30.375 11.4375C30.375 10.0948 29.8416 8.80717 28.8922 7.85777C27.9428 6.90837 26.6552 6.375 25.3125 6.375ZM14.625 11.4375C14.625 5.53519 19.4102 0.75 25.3125 0.75C31.2148 0.75 36 5.53519 36 11.4375C36 17.3398 31.2148 22.125 25.3125 22.125C19.4102 22.125 14.625 17.3398 14.625 11.4375ZM86.0625 6.375C84.7198 6.375 83.4322 6.90837 82.4828 7.85777C81.5334 8.80717 81 10.0948 81 11.4375C81 12.7802 81.5334 14.0678 82.4828 15.0172C83.4322 15.9666 84.7198 16.5 86.0625 16.5C87.4052 16.5 88.6928 15.9666 89.6422 15.0172C90.5916 14.0678 91.125 12.7802 91.125 11.4375C91.125 10.0948 90.5916 8.80717 89.6422 7.85777C88.6928 6.90837 87.4052 6.375 86.0625 6.375ZM75.375 11.4375C75.375 5.53519 80.1602 0.75 86.0625 0.75C91.9648 0.75 96.75 5.53519 96.75 11.4375C96.75 17.3398 91.9648 22.125 86.0625 22.125C80.1602 22.125 75.375 17.3398 75.375 11.4375ZM47.8125 0.75C41.9102 0.75 37.125 5.53519 37.125 11.4375C37.125 17.3398 41.9102 22.125 47.8125 22.125H63.5625C64.6701 22.125 65.7383 21.9563 66.7429 21.6435L69.75 23.25L72.9945 17.1727C73.8187 15.6257 74.2498 13.8997 74.25 12.1468V11.4375C74.25 5.53519 69.4648 0.75 63.5625 0.75H47.8125ZM68.625 11.4375C68.625 10.0948 68.0916 8.80717 67.1422 7.85777C66.1928 6.90837 64.9052 6.375 63.5625 6.375H47.8125C47.1477 6.375 46.4894 6.50595 45.8752 6.76036C45.261 7.01477 44.7029 7.38768 44.2328 7.85777C43.7627 8.32787 43.3898 8.88595 43.1354 9.50016C42.8809 10.1144 42.75 10.7727 42.75 11.4375C42.75 12.1023 42.8809 12.7606 43.1354 13.3748C43.3898 13.989 43.7627 14.5471 44.2328 15.0172C44.7029 15.4873 45.261 15.8602 45.8752 16.1146C46.4894 16.3691 47.1477 16.5 47.8125 16.5H63.5625C64.8984 16.5 66.1801 15.9721 67.1284 15.0312C68.0767 14.0903 68.6146 12.8127 68.625 11.4769V11.4375Z" fill="white" />
                <path d="M99 2.15625C99 2.52921 98.8518 2.8869 98.5881 3.15062C98.3244 3.41434 97.9667 3.5625 97.5938 3.5625C97.2208 3.5625 96.8631 3.41434 96.5994 3.15062C96.3357 2.8869 96.1875 2.52921 96.1875 2.15625C96.1875 1.78329 96.3357 1.4256 96.5994 1.16188C96.8631 0.898158 97.2208 0.75 97.5938 0.75C97.9667 0.75 98.3244 0.898158 98.5881 1.16188C98.8518 1.4256 99 1.78329 99 2.15625Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_1_996">
                  <rect width="99" height="22.5" fill="white" transform="translate(0 0.75)" />
                </clipPath>
              </defs>
            </svg>
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
          className={`${menuOpen ? 'flex' : 'hidden'
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
