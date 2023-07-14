import React from 'react'
import  {BiChevronRight} from "react-icons/bi";
import Marketing from './resources/Marketing1.png';
function Why() {
  return (
    <div className="my-16 md:my-24 w-full bg-primaryWhite">
        <div className='max-w-5xl mx-auto flex flex-col sm:flex-row justify-center items-center sm:space-x-10 space-y-10 sm:space-y-0 px-4 xs:px-10 lg:px-12 xl:px-0'>
            <div className='flex  flex-1 sm: flex-col justify-center sm:justify-start items-center sm:items-start space-y-6 w-full text-center xs:text-left'>                
                <span className='text-2xl xs:text-3xl font-semibold w-full leading-[3rem]'>Why DaPixel?</span>
                <span className='text-base leading-relaxed'>To get customers, it's imperative to be seen by the mass. Every successful company is unique and needs contrasting digital marketing strategies. Book a meeting with us and we will help you find the correct strategy for your company.</span>
                <span className='flex space-x-2 justify-center items-center rounded-xl bg-primary text-primaryWhite  py-[10px] px-6  cursor-pointer w-fit'><span>Book free Meeting</span> <BiChevronRight className='text-center flex justify-center my-auto text-lg'/> </span>
            </div> 
            <div className='flex flex-1 justify-right sm:justify-center mx-auto items-center'>
                <img src={Marketing} alt="Marketing Image" className='transform scale-[1.1] sm:scale-[1.2] md:scale-[1] flex justify-center'/>
            </div>
        </div>
    </div>
  )
}

export default Why