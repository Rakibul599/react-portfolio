import React from 'react'
import { getUrlimg } from '../../utils/Geturlimg'

function Contact() {
  return (
    <div className='w-full bg-[#19376d]'>
        <div className='font-roboto my-color-text w-[80%] pt-11 pb-11 mx-auto '>
        <div className='grid grid-cols-1 sm:grid-cols-2'>
        <div>
            <h1 className='sm:text-[50px] text-[60px] font-bold text-center sm:text-start'>Contact</h1>
            <div className='w-full text-center sm:text-start'>
            <p className='text-[30px] sm:text-[25px] sm:w-full w-[60%] mx-auto sm:m-0'>Feel free to reach out!</p>
            </div>
            
        </div>
        <div>
            <div className='flex flex-row mt-3 sm:mt-0 gap-7 sm:gap-3 mb-5'>
                <img src={getUrlimg("contact/emailIcon.png")} alt="" className='w-12 h-12 sm:w-10 sm:h-10'/>
                <a href="mailto:rakibulalam59900@gmail.com" className='place-content-center text-[20px] sm:text-[16px]'>rakibulalam59900@gmail.com</a>
            </div>
            <div className='flex flex-row gap-3 mb-5'>
                <img src={getUrlimg("contact/linkedinIcon.png")} alt="" className='w-12 h-12 sm:w-10 sm:h-10' />
                <a href="https://www.linkedin.com/in/rakibul-alam-b00b231b6/" target="_blank" className='place-content-center text-[20px] sm:text-[16px]'>https://www.linkedin.com/</a>
            </div>
            <div className='flex flex-row gap-3 mb-5'>
                <img src={getUrlimg("contact/githubIcon.png")} alt="" className='w-12 h-12 sm:w-10 sm:h-10' />
                <a href="https://github.com/Rakibul599" target="_blank" className='place-content-center text-[20px] sm:text-[16px]'>https://github.com/Rakibul599</a>
            </div>
    
        </div>
        </div>

    </div>
    </div>

  )
}

export default Contact