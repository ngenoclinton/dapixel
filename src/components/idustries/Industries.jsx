import React from 'react'
import WebOptimization from './resource/web_optimization.png';
import Bookimage from './resource/Bookimage.png';

import tpstorelogo from './resource/tpstorelogo.svg';
import decodelogo from './resource/decodelogo.svg';
import omnilogo from './resource/omnilogo.svg';
import hygimatic from './resource/hygimaticlogo.svg';
import takentre from './resource/takentrelogo.svg';

import Wave from '../HomePage/Wave'
import Frame from './Frame'
import Navbar from '../HomePage/Navbar'
import Footer from '../HomePage/Footer'
import Why from '../HomePage/Why'
import  Testimonials from '../HomePage/Testimonials';
import Contact from '../HomePage/Contact';
function Industries() {
  return (
    <div className='relative'>
    {/* <Navbar /> */}
        <div className='mx-auto flex flex-col lg:flex-row z-10 pt-20 md:max-w-3xl lg:max-w-4xl xl:max-w-6xl space-y-20 md:space-y-0'>   
            <div className='flex flex-1 flex-col text-center md:text-left md:text-left z-10  max-w-full space-y-5 lg:space-y-8 px-7 xs:px-16 xl:px-0 xl:pl-20'>            
                <h1 className='font-bold leading-loose text-2xl xs:text-3xl sm:text-4xl lg:text-5xl'>Industries & Expertise</h1>
                <span className='text-base md:text-lg max-w-2xl lg:max-w-full leading-relaxed'>A specialist lead generation agency that guides you along the whole road to growth. We help a wide range of B2B, SaaS, and E-commerce clients optimizing and maximizing their digital marketing. We generate unlimited leads for your business using a proven and unique strategy. Along the way, you have a full overview.</span>                
            </div>
            <div className='z-10 flex flex-1 mx-auto transform items-center xl:items-start justify-center xl:justify-end mt-20'>
              <img src={WebOptimization} alt='serviceImg' className='-mt-20 md:-mt-12 lg:-mt-24 scale-[0.7] md:scale-[0.8] lg:scale-[.9] xl:scale-[0.8]'/>
            </div>       
        </div>
        <Wave/>
        <Frame />
        <div className='bg-primary h-full relative p-8 xs:p-16 lg:p-24 items-center'>
            <div className='text-primaryWhite max-w-3xl md:max-w-xl mx-auto text-center leading-relaxed flex flex-col items-center'>
                <h1 className='font-semibold sm:font-bold text-xl xs:text-2xl mb-7 text-center'>What Happens When I Hire Lunar Strategy?</h1>
                <p className='text-base md:text-lg leading-relaxed text-center mb-4'>Book a free 30-minute consultation with one of our experts. Absolutely no
                pressure, just a friendly rundown and some great advice.</p>
                <span className='cursor-pointer mt-5 rounded-full py-3 px-7 xs:px-10 w-fit bg-primaryDark bg-opacity-[.5] text-primaryWhite items-center text-sm xs:text-base'>Yes, I would like some advice </span>
            </div>            
        </div>
        <Testimonials className='' />   
        <div className='bg-primary my-24 p-6 xs:p-9'>
        <div className='flex flex-col md:flex-row max-w-4xl mx-auto text-primaryWhite md:space-x-4'>
            <div className='flex-1 flex justify-start'>
                <img src={Bookimage} alt='Bookimage'></img>
            </div>
            <div className='flex flex-col flex-1 items-center justify-center space-y-8'>
                <h1 className='font-bold text-xl sm:text-2xl text-center md:text-left md:text-3xl'>Get a FREE complete editorial guide for social media growth</h1>
                <p className='text-center md:text-left text-base leading-relaxed'>Download your guide filled with clear, actionable tips on how your company can create successful organic content on social media. You'll find useful statistics as well as real-life examples and insights based on our own experiences as a social media agency.</p>
                <span className=' cursor-pointer mt-5 rounded-full py-3 px-10 w-fit bg-primaryDark bg-opacity-[.5] text-primaryWhite items-center'>Download Now</span>
            </div>
        </div> 
        </div>   
        <Contact/>
        <div className=' mx-auto text-primaryWhite'>
            <div className='flex flex-row max-w-4xl md:max-w-5xl mx-auto text-primaryWhite md:space-x-6 items-center px-7 md:px-5'>
               <div ><img src={tpstorelogo} alt='' className='transform scale-[.7] md:scale-[.5] items-center'/></div> 
               <div><img src={decodelogo} alt='' className='transform scale-[.9] md:scale-[.5]  items-center'/></div> 
               <div><img src={omnilogo } alt='' className='transform scale-[.9] md:scale-[.5]  items-center '/></div> 
               <div><img src={hygimatic} alt='' className='items-center transform scale-[.9] md:scale-[.5] '/></div> 
                <div><img src={takentre} alt='' className='transform scale-[.9] md:scale-[.5]  items-center'/></div>
            </div>
        </div>
        <Why/>
        <Footer/>
    </div>
  )
}

export default Industries