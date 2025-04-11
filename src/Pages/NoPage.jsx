import React from 'react'
import { Link } from "react-router-dom"
import { PiHandWaving } from "react-icons/pi";


const NoPage = () => {
  return (
    <div className=' h-screen w-screen flex justify-center items-center bg-secondary'>
      <div  className= ' text-white  container-grid grid-cols-1 gap-4'>
        <div style={{ display: 'flex', alignItems: 'center' }}>
       
      <span data-aos="fade-up"  className='text-md'> Welcome back !</span> 
      <PiHandWaving />
      </div>
      <div>
      <p  data-aos="fade-up" 
                data-aos-delay="300" 
                className='font-bold text-3xl'>
        Are you ready to Discover our Trips and offers?
      </p>
      </div>
     
      <Link to="/">
      <button className="bg-quaternary opacity-95 text-white hover:scale-105 px-4 py-2 rounded-full duration-200  absolute  left-1/2">Start Now</button>
      </Link>
     
       </div>
    </div>
  )
}

export default NoPage