import React from 'react'

function Nav() {
  return (
    <div className='flex justify-between my-color-text text-[18px] font-roboto'>
      <ul className='ml-28 mt-6'>
        <li><a href="">Rakibul</a></li>
      </ul>
      <ul className='flex gap-8 mr-32 mt-6'>
        <li><a href="">About</a></li>
        <li><a href="">Experience</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Contact</a></li>
      </ul>
      
    </div>
  )
}

export default Nav