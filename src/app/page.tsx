import Navbar from "./components/Navbar";
import TextMarquee from "./components/TextMarquee";
import Gradient from "./components/Gradient";
import ButtonMarquee from "./components/ButtonMarquee";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="relative overflow-hidden ">
      {/* Navbar  */}
         <Navbar />
      {/* Blur gradient */}
       <Gradient/>
      {/* Hero Section  */}
      <div className=" flex lg:flex-row  flex-col-reverse container mx-auto justify-center">
        <div className="  flex flex-col justify-center items-center pt-5 relative">
          <div className="flex flex-col justify-center lg:items-start items-center space-y-10">
            <div className="ClashDisplay-Bold text-6xl relative">
              <img src="I’m.svg" alt="" className="absolute top-[-25px] lg:left-[-40px] -left-3" />
              <h1 className="max-w-64 lg:text-start text-center"> Shaun Murphy</h1>
            </div>
            <div className="ClashDisplay-Light max-w-80  lg:text-start text-center  ">
              <p>An aspiring UI/UX Designer. Who breathes life into pixels, crafting interfaces that not only engage but enchant.</p>
            </div>
            <div className="flex sm:gap-5 gap-3">
              <div className=" group relative">
                <img src="img-2.png" alt="" className="absolute group-hover:rotate-12 transition-all  top-[-25px] right-[-10px] w-14 duration-200" />
                <button className="sm:w-48 w-36  h-14 bg-gradient-to-b from-[#948f8f] to-neutral-700 rounded-2xl shadow border border-neutral-700 ClashDisplay-Regular">Hire Me</button>
              </div>
              <div className=" group relative">
                <img src="img-3.png" alt="" className="absolute group-hover:rotate-12 transition-all duration-200 bottom-[-15px] right-[-12px] w-12" />
                <button className="sm:w-48 w-36 h-14 bg-gradient-to-b from-[#948f8f] to-neutral-700 rounded-2xl shadow border border-neutral-700 ClashDisplay-Regular">My Story</button>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex lg:justify-end justify-center items-center group   relative cursor-pointer ">
          <div className="lg:w-[80%] w-[60%] group-hover:-rotate-2 transition-all duration-300"><img src="/img-1.svg" alt=" Hero Section Image " /></div>
        </div>
      </div>
       {/* Text Line Marquee  */}
      <div className="w-full sm:h-20 h-16 sm:mt-24 mt-28 px-5 origin-top-left rotate-[-3.27deg] bg-zinc-900 shadow justify-start items-center gap-5 inline-flex cursor-pointer">
         <TextMarquee/>
      </div>
      {/* About ME  */}
      <div className='container mx-auto sm:py-24 py-16'>
        <div className="w-full lg:pl-16 grid lg:justify-start justify-center">
            <h1 className="ClashDisplay-Semibold text-6xl  lg:text-start text-center">About Me</h1>
            <img src="/aboutline.png" alt=""  />
        </div>
        <div className="grid grid-cols-10 pt-14">
            <div className=" lg:col-span-3 group cursor-pointer col-span-10 flex justify-center items-center">
               <div className="lg:w-[80%] w-[60%] group-hover:-rotate-2 transition-all duration-300"><img src="/img-4.png" alt=" Hero Section Image " /></div>
            </div> 
             <div className="lg:col-span-7 col-span-10 lg:p-5 px-8 pt-8 w-full lg:text-4xl text-2xl ClashDisplay-Regular flex justify-center items-center">
                  Hey there! I'm Shaun, a passionate UI/UX designer armed with creativity and a love for problem-solving. With a blend of design thinking and user-centric approach, I'm on a mission to create digital experiences that leave a lasting impression. So let's collaborate and bring your vision to life!
             </div>
        </div>
      </div>
      <div className="container mx-auto px-8 pb-10">
        <div className="flex md:flex-row flex-col md:gap-4  justify-between items-center gap-16">
        <div className="grid justify-center items-center text-current ">
          <div className="ClashDisplay-Semibold text-7xl gradient-text  drop-shadow-[0_0_10px_rgba(236,72,153,0.8)] text-center ">5+</div>
          <div className=" text-center text-neutral-400 text-3xl ClashDisplay-Medium ">
          Years of Design <br /> Experience
          </div>
        </div>
        <div className="h-36 md:block hidden  w-[1px] bg-[#585858]"></div>
        <div className="grid justify-center items-center gap-5">
          <div className="ClashDisplay-Semibold text-7xl gradient-text  drop-shadow-[0_0_10px_rgba(236,72,153,0.8)] ">50+</div>
          <div className=" text-center text-neutral-400 text-3xl ClashDisplay-Medium ">
          Overall Global <br /> Customers
          </div>
        </div>
        <div className=" md:block hidden h-36 w-[1px] bg-[#585858]"></div>
        <div className=" grid justify-center items-center text-center gap-5">
          <div className="ClashDisplay-Semibold text-7xl gradient-text  drop-shadow-[0_0_10px_rgba(236,72,153,0.8)] ">90+</div>
          <div className=" text-center text-neutral-400 text-3xl ClashDisplay-Medium ">
          Projects I Have  <br />Worked on
          </div>
        </div>
        </div>
      </div>
      {/* Project  */}
      <div className=" px-10  container mx-auto  overflow-hidden">
        <div className=" py-24">
          <div className="w-full  lg:pl-16 grid lg:justify-start justify-center  ">
            <h1 className="ClashDisplay-Semibold text-6xl  lg:text-start text-center w-full">Projects</h1>
            <img src="/aboutline.png" alt="project-line-png" className="w-[90%] relative sm:left-0 left-4 " />
          </div>
        </div>
        <div className="w-full flex sm:flex-row flex-col  sm:gap-8 gap-5 relative ">
          <Gradient/>
          <div className=" group w-full rounded-3xl  sm:h-[400px] h-[200px] overflow-hidden relative border border-[#5c58588f]">
            <img src="/project (1).png" alt="project-1" className="w-full h-full object-cover"/>
            <div className="w-full opacity-0 h-full group-hover:opacity-100 transition-opacity cursor-pointer duration-500 bg-[#00000081] absolute top-0 left-0 flex justify-center items-center">
              <a href="#" className=" bg-gray-800 rounded-md p-2"><img src="/eye.svg" alt="eye" /></a>
            </div>
          </div>
          <div className=" group w-full rounded-3xl  sm:h-[400px] h-[200px] overflow-hidden relative border border-[#5c58588f]">
            <img src="/project (2).png" alt="project-2" className="w-full h-full object-cover"/>
            <div className="w-full opacity-0 h-full group-hover:opacity-100 transition-opacity cursor-pointer duration-500 bg-[#00000081] absolute top-0 left-0 flex justify-center items-center">
              <a href="#" className=" bg-gray-800 rounded-md p-2"><img src="/eye.svg" alt="eye" /></a>
            </div>
          </div>
        </div>
        <div className=" group w-full rounded-3xl sm:my-8 my-5  sm:h-[400px] h-[200px] overflow-hidden relative  border border-[#5c58588f]">
            <img src="/project (3).png" alt="project-3" className="w-full h-full object-cover scale-125"/>
            <div className="w-full opacity-0 h-full group-hover:opacity-100 transition-opacity cursor-pointer duration-500 bg-[#00000081] absolute top-0 left-0 flex justify-center items-center">
              <a href="#" className=" bg-gray-800 rounded-md p-2"><img src="/eye.svg" alt="eye" /></a>
            </div>
          </div>
        <div className="w-full flex sm:flex-row flex-col sm:gap-8 gap-5 relative">
          <Gradient/>
          <div className=" group w-full rounded-3xl  sm:h-[400px] h-[200px] overflow-hidden relative border border-[#5c58588f]">
            <img src="/project (4).png" alt="project-4" className="w-full h-full object-cover"/>
            <div className="w-full opacity-0 h-full group-hover:opacity-100 transition-opacity cursor-pointer duration-500 bg-[#00000081] absolute top-0 left-0 flex justify-center items-center">
              <a href="#" className=" bg-gray-800 rounded-md p-2"><img src="/eye.svg" alt="eye" /></a>
            </div>
          </div>
          <div className=" group w-full rounded-3xl  sm:h-[400px] h-[200px] overflow-hidden relative border border-[#5c58588f]">
            <img src="/project (5).png" alt="project-5" className="w-full h-full object-cover"/>
            <div className="w-full opacity-0 h-full group-hover:opacity-100 transition-opacity cursor-pointer duration-500 bg-[#00000081] absolute top-0 left-0 flex justify-center items-center">
              <a href="#" className=" bg-gray-800 rounded-md p-2"><img src="/eye.svg" alt="eye" /></a>
            </div>
          </div>
        </div>
      </div>
      {/* Companies Computer */}
      <div className="w-full lg:pl-16 lg:grid hidden lg:justify-start justify-center pt-24 mb-10">
        <h1 className="ClashDisplay-Semibold text-6xl  lg:text-start text-center">Companies I’ve Worked With</h1>
        <img src="/linelong.png" alt="project-line-png" className="w-[98%]" />
      </div>
     {/* Companies  Mobile */}
     <div className="py-20 lg:hidden  w-full flex flex-col justify-center items-center ">
      <div className="w-fit lg:pl-16 flex flex-col  justify-center  items-center  ">
       <h1 className="ClashDisplay-Semibold sm:text-6xl text-3xl  lg:text-start text-center">Companies I’ve </h1>
        <img src="/aboutline.png" alt="project-line-png" className=" sm:w-full w-[79%]  " />
      </div>
      <div className="w-fit lg:pl-16 flex flex-col items-center  justify-center  ">
        <h1 className="ClashDisplay-Semibold sm:text-6xl text-3xl  lg:text-start text-center">Worked With</h1>
        <img src="/aboutline.png" alt="project-line-png" className=" sm:w-full w-[69%] " />
      </div>
    </div>

    <div className="mb-32">
      <ButtonMarquee/>
    </div>

    <Footer/>
    
    </ div>
  );
}
