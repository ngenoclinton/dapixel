import React from 'react'
import WebDesign from './resource/WebDesign.png'

import Wave from '../Wave';
import Why from '../Why';
import Footer from '../Footer';
import Frame from './Frame';
import Contact from '../Contact';
import Navbar from '../Navbar';
import {BiLogoFacebook, BiLogoInstagram, BiLogoLinkedinSquare, BiLogoTwitter} from "react-icons/bi"

function Service() {
  return (
    <div className='relative'>
    {/* <Navbar /> */}
     <div className='mx-auto flex flex-col lg:flex-row z-10 md:max-w-3xl lg:max-w-4xl xl:max-w-6xl  space-y-20 md:space-y-0'>
        <div className='flex flex-1 flex-col xl:justify-center text-left md:text-left z-10  max-w-full space-y-5 lg:space-y-8 px-16 xl:px-0 xl:pl-20'>            
            <h1 className='font-bold leading-loose text-2xl xs:text-3xl sm:text-4xl md:text-5xl'>Services</h1>
            <span className='text-base sm:text-lg leading-relaxed max-w-2xl lg:max-w-full'>All our digital marketing services start with a free 30-minute consultation call where we find the best strategy towards reaching your goals.</span>
            
            <button className='pt-2 bg-primary text-primaryWhite py-[7px] w-fit px-5 rounded-md text-center flex justify-start items-start'>Contact Us</button>
        </div>
        <div className='z-10 flex flex-1 mx-auto transform items-center xl:items-start justify-center xl:justify-end mt-20'>
            <img src={WebDesign} alt='serviceImg' className='-mt-20 md:-mt-20 lg:-mt-24 l-image transform scale-[0.9] lg:scale-[1] xl:scale-[0.7]'/>
        </div>       
    </div>
    <Wave />
    <Frame className='mb'/>
    
    <div className='bg-primary h-full relative px-16 xl:px-0'>
        <div className='text-primaryWhite max-w-5xl   py-14 mx-auto text-center leading-relaxed'>
            <h1 className='font-bold text-2xl mb-7 text-center'>What Happens When I Hire Lunar Strategy?</h1>
            <p className='text-lg leading-relaxed mb-4 text-left md:text-center'>When you hire Lunar Strategy, you get an external digital marketing team that drives your entire digital marketing towards measurable results. The marketing strategy that we lay out is based on your company’s business needs and goals, and we keep an ongoing dialogue to stay updated. The work is planned three months at a time and is held together by a project manager from Lunar Strategy. </p>
            <p className='text-lg leading-relaxed mb-4 text-left md:text-center'>
            The specialists who are part of the team are adjusted when needed, based on what the focus is. We have specialists within most aspects of digital marketing and ensure that you always have access to the expertise you need in order to succeed.</p>
            <p className='text-lg leading-relaxed mb-4 text-left md:text-center'> 
            The starting point for all work is your business goals, which are translated into key figures that we measure and report on to you. This way, you get follow-up that has a clear connection to what you and the company want to get out of the investment you make in us. You get all this at a fixed monthly price that corresponds to approximately one employee</p>
        </div>
    </div>
    <Contact />
    <Why className='relative top-24'/>
    <Footer/>
</div>
  )
}

export default Service