import React from 'react'
import py1Img from "../assets/py1.jpg"
import Signin from '../Components/registration/Signin'
const SignUp = () => {
  return (
  <div>
    <div className="text-white h-[700px] flex justify-center ">
      <img src={py1Img} className='absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]'>
      
      </img>
    <Signin />
    </div>
   
   

    </div>
  )
}

export default SignUp