import React from 'react'
import heroicon from "../../assets/passport.jpg"

function Hero() {
  return (
    <div className='font-roboto my-color-text pb-16 relative z-0 w-full'>
        <div className='absolute w-[50vw] h-[50vw] min-w-[350px] top-[-32vw] left-[-20vw] rounded-[764px] bg-[rgba(25,55,109,0.7)] blur-[100px] z-[-2] '></div>
        <div className='absolute w-[40vw] h-[40vw] min-w-[250px] top-[1vw] right-[-10vw] rounded-[764px] bg-[rgba(25,55,109,0.7)] blur-[100px] z-[-2] '></div>
        <div className="grid grid-cols-2 ml-28 mt-16 ">
        <div className="">
        
          <h1 className="text-[35px] pb-5">Hi,I'm Rakibul Alam</h1>
          <p className="w-[60%] text-[20px] pb-8 leading-relaxed z-[3]">
            I'm a full-stack developer with 5 years of experience using React
            and NodeJS. Reach out if you'd like to learn more!
          </p>
          <button className="bg-[#576cbc] text-[18px] p-2 rounded-3xl">
            Contact Me
          </button>
        </div>
        <div className="ml-44">
          {/* @TODO */}
          {/* <div className="bg-[#5f73b0] h-[300px] w-[300px] rounded-full"></div> */}
          <img src={heroicon} alt="" className="bg-[#5f73b0] h-[300px] w-[300px] rounded-full  z-10 heroImg" />
        </div>
      </div>
      
    </div>
  )
}

export default Hero