import React from 'react'

const Hero = () => {
  return (
    <div className=' h-full margin-top 10px '>
    <div className='h-full flex justify-center items-center p-4 bg-primary/10'>
        <div className='container-grid grid-cols-1 gap-4'>
            <div className='text-white'>
                <p data-aos="fade-up"  className='text-sm'>
                    Our Packeges
                </p>
                <p data-aos="fade-up" 
                data-aos-delay="300" 
                className='font-bold text-3xl'>
                 Search Your Desired Destinaition
                </p>

            </div>
            <div className='space-y-4 bg-blurr  rounded-md p-4 relative'>
              <div className='grid grid-cols-1 sm:grid-cols-2  gap-4 py-3'>
                <div>
                    <label htmlFor='city'  className='text-white'>
                        Search Your City
                    </label>
                    <input type='text'
                    name='city'
                    id='city'
                    placeholder='cairo'
                    className='w-full bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2'
                    />
                </div>
                <div>
                <label htmlFor='city' className='text-white'>
                        What's The Date ?
                    </label>
                    <input type='date'
                    name='city'
                    className='w-full 
                    !placeholder-slate-400
                    bg-gray-100 my-2 range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2'
                    />
                </div>
                <button className="bg-quaternary opacity-95 text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2">
                Find Your Trip
            </button>
              </div>
            </div>

        </div>

    </div>

</div>
  )
}

export default Hero;