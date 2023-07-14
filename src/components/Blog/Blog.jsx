import React from 'react'
import Wave from '../HomePage/Wave';
import Posts from './Posts';
import  {BiChevronRight} from "react-icons/bi";
import Why from '../HomePage/Why';
import Footer from '../HomePage/Footer';

function Blog() {
    const shouldApplyStyle = true;
  return (
    <div className='relative box-border'>
        <div className='mx-auto flex flex-col lg:flex-row z-10 md:max-w-3xl lg:max-w-4xl xl:max-w-6xl space-y-20 md:space-y-0 mt-2 mb-20'>           
            <div className='flex flex-1 flex-col mt-10 xl:mt-16 text-center md:text-left z-10  max-w-full space-y-5 lg:space-y-8 px-7 xs:px-16 xl:px-0 xl:pl-20 leading-relaxed'>            
                <h1 className='font-bold leading-normal text-2xl xs:text-3xl sm:text-3xl lg:text-4xl'>DaPixel Blog​</h1>
                <span className='text-base lg:max-w-full leading-relaxed text-primary'>Digital Marketing Articles</span>                
            </div>                          
        </div>
        <Wave/>
        <Posts/>
        <Why/>
        <Footer/>
    </div>
  )
}

export default Blog;