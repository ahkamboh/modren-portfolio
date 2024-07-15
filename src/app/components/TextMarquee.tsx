import React from 'react'
import Marquee from 'react-fast-marquee'
function TextMarquee() {
  return (
    <Marquee direction="left" pauseOnHover >
      <div className="text-white lg:text-3xl text-xl ClashDisplay-Medium ">Visual Design</div>
      <img src="/SoftStar.png" alt="star" className='px-4' />
      <div className="text-white lg:text-3xl text-xl  ClashDisplay-Medium">Rapid Prototyping</div>
      <img src="/SoftStar.png" alt="star"  className='px-4' />
      <div className="text-white lg:text-3xl text-xl  ClashDisplay-Medium">User Testing</div>
      <img src="/SoftStar.png" alt="star"  className='px-4' />
      <div className="text-white lg:text-3xl text-xl  ClashDisplay-Medium">Design Systems</div>
      <img src="/SoftStar.png" alt="star"  className='px-4' />
      <div className="text-white lg:text-3xl text-xl  ClashDisplay-Medium">Graphic Design</div>
      <img src="/SoftStar.png" alt="star"  className='px-4' />
      <div className="text-white lg:text-3xl text-xl  ClashDisplay-Medium">BBC Studios</div>
      <img src="/SoftStar.png" alt="star"  className='px-4' />
      <div className="text-white lg:text-3xl text-xl  ClashDisplay-Medium">Blizzard</div>
    </Marquee>
  )
}

export default TextMarquee