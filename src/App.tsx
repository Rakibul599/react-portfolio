import { useState } from 'react'
import './App.css'
import Nav from './component/navbar/Nav'
import About from './component/About/About'
import Hero from './component/Hero/Hero'
import Experience from './component/Experience/Experience'

function App() {
 

  return (
    <div className='bgcolor w-[100%] h-full overflow-x-hidden scroll-smooth'>
       <Nav />
       <Hero />
       <About />
       <Experience />
    </div>
       
  )
}

export default App
