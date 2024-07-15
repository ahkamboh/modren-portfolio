import React from 'react'

function Footer() {
  return (
    <div className=" container mx-auto sm:px-20 px-8 py-10">
    <div className="bg-gradient-to-b from-[#948f8f] to-neutral-700 rounded-2xl shadow border border-[#ffffff]">
      <div className="grid-cols-10 grid sm:p-10 xl:pb-10 pb-2 p-5">
        <div className="md:col-span-4  col-span-10 relative md:block flex justify-center ">
          <img src="/footer.png" alt="" className=" md:w-full w-[200px] absolute 2xl:scale-90 xl:scale-110 scale-125  2xl:top-[-290px]    xl:top-[-210px] md:top-[-150px] bottom-[-130px]  " />        
        </div>
        <div className="md:col-span-3  col-span-10 list-none p-4 md:text-end text-center md:pt-4 pt-40  ">
          <div className=" text-3xl ClashDisplay-Semibold ">Professional Links</div>
          <li className="text-3xl ClashDisplay-Light text-white hover:text-blue-500 transition-colors duration-300"><a href="">LinkedIn</a></li>
          <li className="text-3xl ClashDisplay-Light text-white hover:text-blue-500 transition-colors duration-300"><a href="">Behance</a></li>
          <li className="text-3xl ClashDisplay-Light text-white hover:text-blue-500 transition-colors duration-300"><a href="">Dribbble</a></li>
          <li className="text-3xl ClashDisplay-Light text-white hover:text-blue-500 transition-colors duration-300"><a href="">Figma</a></li>
        </div>
        <div className="col-span-3 list-none  p-4 md:block hidden text-end">
          <div className="text-3xl  ClashDisplay-Semibold  text-white hover:text-blue-500 transition-colors duration-300 ">Quick Menu</div>
          <li className="text-3xl ClashDisplay-Light  text-white hover:text-blue-500 transition-colors duration-300"><a href="">Contact</a></li>
          <li className="text-3xl ClashDisplay-Light  text-white hover:text-blue-500 transition-colors duration-300"><a href="">About</a></li>
          <li className="text-3xl ClashDisplay-Light  text-white hover:text-blue-500 transition-colors duration-300"><a href="">Work</a></li>
          <li className="text-3xl ClashDisplay-Light  text-white hover:text-blue-500 transition-colors duration-300"><a href="">Home</a></li>
        </div>
      </div>
      <div className=" p-8 pt-5  ">
       <div className="w-full h-[1px] bg-white"></div>
       <div className="flex  sm:flex-row flex-col justify-between items-center pt-5 space-y-5">
         <div className="ClashDisplay-Light sm:text-start text-center">@ 2024 Shaun Murphy All Rights Reserved</div>
         <div className=" flex gap-3 ">
          <div className="p-2 bg-transparent border border-white rounded-full"><img src="/instagram.svg" alt="" /></div>
          <div className="p-2 bg-transparent border border-white rounded-full"><img src="/twitter.svg" alt="" /></div>
          <div className="p-2 bg-transparent border border-white rounded-full"><img src="/facebook.svg" alt="" /></div>
        </div>
       </div>
      </div>
    </div>
  </div>
  )
}

export default Footer