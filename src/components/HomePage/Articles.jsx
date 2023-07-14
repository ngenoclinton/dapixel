import React from 'react';
import  {BiChevronRight} from "react-icons/bi";
function Articles() {
  return (
    <div className='bg-primary mx-auto mt-36 py-10'>  
        <div className='flex flex-col lg:flex-row h-full space-y-7 justify-center max-w-5xl lg:max-w-6xl mx-auto px-10 xl:px-0 py-10'> 
            <div className='flex flex-col justify-center text-left text-primaryWhite'>
                <span className='space-x-20 h-[3px] w-16 bg-primaryWhite bg-gradient-to-r from-primaryWhite via-primaryWhite to-primary'></span>
                <span className='text-3xl md:text-4xl font-semibold max-w-[400px] w-full leading-[3rem]'>Digital Marketing Articles</span>
            </div>
            <div className='flex flex-1 h-full flex-col sm:flex-row flex-start justify-center sm:space-x-5 space-y-5'>
             {/*  */}
              <div  className='flex-1 p-5 w-full space-y-5 h-fill flex flex-col lg:justify-evenly text-primaryWhite text-left rounded-lg bg-primaryDark bg-opacity-10 mt-5'>
                <span className='font-semibold text-xl'>Top 5 SaaS Businesses – August 2021</span>
                <span className='text-base'>Are you currently using one of the top SaaS businesses, according to the team at Lunar Strategy? Check out this list of our top SaaS</span>
                
                <span className='text-primaryDark flex justify items-center rounded-xl bg-primaryWhite py-2 px-6  cursor-pointer w-fit'><span>Read more</span> <BiChevronRight className=''/> </span>                  
              </div>
              {/*  */}
              <div  className='flex-1 p-5 w-full space-y-5  h-fill flex flex-col justify-evenly text-primaryWhite text-left rounded-lg bg-primaryDark bg-opacity-10'>
                <span className='font-semibold text-xl w-fit'>T12 Best SaaS WordPress Themes To Convert Lead</span>
                <span className='text-base'>Lead conversion is an essential goal for any business. Be it converting site visitors into members, increasing their email subscription list, or converting members into</span>
                <span className='text-primaryDark flex justify items-center rounded-xl bg-primaryWhite py-2 px-6  w-fit cursor-pointer space-x-5 '><span>Read more</span> <BiChevronRight className=''/> </span>
              </div>
            </div>
        </div>
     </div>
  )
}

export default Articles;