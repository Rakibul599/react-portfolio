import React from "react";
import heroicon from "../../assets/passport.jpg";

function Hero() {
  return (
    <div
      className="font-roboto my-color-text pb-16 relative z-0 w-[80%] mx-auto mb-8 mt-10 "
      id="home"
    >
      <div className="absolute w-[50vw] h-[50vw] min-w-[350px] top-[-32vw] left-[-20vw] rounded-[764px] bg-[rgba(25,55,109,0.7)] blur-[100px] z-[-2] "></div>
      <div className="absolute w-[40vw] h-[40vw] min-w-[250px] top-[1vw] right-[-10vw] rounded-[764px] bg-[rgba(25,55,109,0.7)] blur-[100px] z-[-2] "></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-16 ">
        <div className="order-last sm:order-first w-full">
          <h1 className="text-[35px] pb-5">Hi,I'm Rakibul Alam</h1>
          <p className="w-[100%] text-[16px] pb-2 leading-relaxed z-[3]">
            I'm a MERN Stack Developer with a passion for crafting dynamic and
            responsive web applications. I specialize in building seamless user
            experiences using modern frameworks and tools, ensuring a perfect
            balance between design and functionality.
          </p>
          <p className="w-[100%] text-[16px] pb-2 leading-relaxed z-[3]">
            Beyond development, I engage in Competitive Programming to sharpen
            my problem-solving skills and deepen my understanding of algorithms
            and data structures.
          </p>
          
          <p className="w-[100%] text-[16px] pb-8 leading-relaxed z-[3]">
            With expertise in both front-end and back-end technologies, I strive
            to build complete, scalable, and efficient applications. Feel free
            to reach out!
          </p>
          <button className="bg-[#576cbc] text-[16px] p-2 w-24 rounded-3xl">
            <a
              href="https://drive.google.com/file/d/1W37Paos491DcGKeW9EYXBjy0W7YlJGY_/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </button>
        </div>
        <div className="flex place-content-center w-full">
          <img
            src={heroicon}
            alt=""
            className="bg-[#5f73b0] h-[200px] w-[200px] sm:mt-4 mt-1 mb-10 sm:h-[300px] sm:w-[300px]  order-first sm:order-last   rounded-full  z-10 heroImg"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
