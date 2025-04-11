
import Signup from "../Components/registration/Signup"
import py1Img from "../assets/py1.jpg"

const SignIn = () => {
  return (
    <div>
        <div className="text-white h-[700px] flex justify-center ">
      <img src={py1Img} className='absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]'>
      
      </img>
        <Signup/>
        </div>
    </div>
  )
}

export default SignIn