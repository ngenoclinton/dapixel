import React from 'react'

function Book() {
  return (
    <div className='bg-primary mx-auto mt-36'>  
        <div className='flex flex-col sm:flex-row h-full py-20 md:py-28 lg:py-32 justify-center max-w-5xl w-full mx-auto px-10 xl:px-0 md:pl-6 space-x-9  space-y-5 sm:space-y-0  xl:space-x-0'> 
            <div className='flex flex-col justify-center text-left text-primaryWhite flex-1'>
            <span className='h-[3px] w-16 bg-primaryWhite bg-gradient-to-r from-primaryWhite via-primaryWhite to-primary'></span>
            <span className='text-3xl md:text-[34px] lg:text-[38px] font-semibold max-w-[450px] w-full leading-[3rem]'>Book A Free Digital Marketing Consultation</span>
            </div>
            <div className='flex flex-col flex-start justify-center flex-1 space-y-4'> 
              <input type='email'  placeholder="Your Email" className='rounded-full bg-primaryWhite py-3 px-10 w-full max-w-sm'></input>
              <button className="rounded-full bg-primaryDark text-primaryWhite bg-opacity-10 w-full max-w-sm py-3  sx:px-10">Book my free meeting</button>
            </div>
        </div>
     </div>
  )
}

export default Book