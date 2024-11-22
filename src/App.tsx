import { useState } from 'react'
import './App.css'
import Nav from './component/navbar/Nav'
import About from './component/About/About'

function App() {
 

  return (
    <div className='bgcolor w-[100%] h-full  '>
       <Nav />
       <About />
    </div>
       
  )
}

export default App
