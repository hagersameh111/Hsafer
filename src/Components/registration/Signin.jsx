import { useState } from "react"
import { Link } from "react-router-dom"
import  Validation from "../../LoginValidation"




const Signin = () => {
  const[values,setValues]= useState({
    email:"",
    password:""
  })
  const [errors,setErrors]=useState({})
  const handleInput=(event)=>{
    setValues(prev=> ({...prev, [event.target.name]:[event.target.value]}))
  }
  const handleSubmit=(event) => {
    event.preventDefault();
    setErrors(Validation(values));
  }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <div  className=' h-screen w-screen flex justify-center items-center '>
            <div className='bg-primary  rounded-md shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-5  relative '>
             <div>
              <div className='space-y-4   rounded-md p-4 relative'>
                <h1 className="text-3xl text-white text-center">  Login</h1>
                <div>
                       <div className=" font-mono text-[14px]" >
                            <label htmlFor="" >Your E-Mail </label>
                          
                             <input type="email"  onChange={handleInput} name="email" className='w-full bg-transparent my-2 range  border-2 border-b-2 border-quaternary border-opacity-30 appearance-none accent-quaternary rounded-full p-2 text-white  focus:outline-quaternary focus:outline outline-1'/>
                             {errors.email && 
                            <span className="text-danger">
                              {errors.email}
                              </span>}
                        </div>
                       <div className=" font-mono text-[14px]" >
                             <label htmlFor="">Enter Password</label>
                            <input type="password"   onChange={handleInput} name="password" className='w-full bg-transparent my-2 range  border-2 border-b-2 border-quaternary border-opacity-30 appearance-none accent-quaternary rounded-full p-2 text-White focus:outline-quaternary focus:outline outline-1'/>
                            {errors.password && 
                            <span className="text-danger">
                              {errors.password}
                              </span>}
                           
                        </div>
                        <div className=" font-mono text-[14px]">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="Remember Me"> Remember Me</label>
                            </div>
                        
                        <button type="submit" onClick={<Link to="/NoPage"/>} className="bg-quaternary opacity-95 text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute  left-1/2 -translate-x-1/2">
                          
                          Login
                          </button>
                         
                        </div>
                       <div className=' rounded-md p-4 flex flex-col space-y-8'>
                       <div className="relative flex justify-center items-center py-4">
                        <span>
                        Don't Have An Account?
                        <Link to={"/SignIn"} className="text-quaternary"> Signup Now</Link>
                        </span>
                       </div>
                       </div>
                    

            </div>

           </div> 
          </div>
        </div>
        </form>
    </div>
  )
}

export default Signin