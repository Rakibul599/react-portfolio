import React from 'react';
import { getUrlimg } from '../../utils/Geturlimg';

function Contact() {
  return (
    <div className="w-full bg-[#19376d]">
      <div className="font-roboto my-color-text w-[90%] sm:w-[80%] pt-11 pb-11 mx-auto " id='contact'>
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-8">
          {/* Left Section */}
          <div>
            <h1 className="sm:text-[50px] text-[60px] font-bold text-center sm:text-start">Contact</h1>
            <div className="w-full text-center sm:text-start">
              <p className="text-[30px] sm:text-[25px] sm:w-full w-[80%] mx-auto sm:mx-0">
                Feel free to reach out!
              </p>
            </div>
          </div>
          {/* Right Section */}
          <div>
            {/* Email */}
            <div className="flex flex-row items-center gap-4 sm:gap-3 mb-5">
              <img
                src={getUrlimg('contact/emailIcon.png')}
                alt="Email Icon"
                className="w-12 h-12 sm:w-10 sm:h-10"
              />
              <p className="break-words w-[90%]">
                <a
                  href="mailto:rakibulalam59900@gmail.com"
                  className="place-content-center text-[15px] sm:text-[16px] break-words"
                >
                  rakibulalam59900@gmail.com
                </a>
              </p>
            </div>
            {/* LinkedIn */}
            <div className="flex flex-row items-center gap-4 sm:gap-3 mb-5">
              <img
                src={getUrlimg('contact/linkedinIcon.png')}
                alt="LinkedIn Icon"
                className="w-12 h-12 sm:w-10 sm:h-10"
              />
              <p className="break-words w-[90%]">
                <a
                  href="https://www.linkedin.com/in/rakibul-alam-b00b231b6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="place-content-center text-[15px] sm:text-[16px] break-words"
                >
                  https://www.linkedin.com/
                </a>
              </p>
            </div>
            {/* GitHub */}
            <div className="flex flex-row items-center gap-4 sm:gap-3 mb-5">
              <img
                src={getUrlimg('contact/githubIcon.png')}
                alt="GitHub Icon"
                className="w-12 h-12 sm:w-10 sm:h-10"
              />
              <p className="break-words w-[90%]">
                <a
                  href="https://github.com/Rakibul599"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="place-content-center text-[15px] sm:text-[16px] break-words"
                >
                  https://github.com/Rakibul599
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
