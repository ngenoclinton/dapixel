import React from 'react'
import SocialMedia from './resources/sm-Group.5.png';
import './page.css'; 

import Fiverr from './resources/Fiverr-Pro.svg';
import Group from './resources/Group.svg';
import wave from './resources/VectorWave.svg';
import Slogo from './resources/S-logo.svg';

function Banner() {
  return (
   <div className='MainBanner relative'>    
    <div className='Flex mx-auto flex flex-col xl:flex-row z-10 max-w-4xl xl:max-w-6xl pt-20 space-y-20 md:space-y-0'>
        <div className='flex flex-1 flex-col text-center items-center md:items-start md:text-left z-10  max-w-full lg:space-y-2 xl:pl-20'>
            <h1 className='font-bold leading-loose md:text-4xl'>We help you grow your<span className='text-primary'> conversations.</span></h1>
            <span className='text-base pt-4 leading'>Featured in leading publications around the world</span>
            <div className='flex space-x-6 transform scale-[.5] xs:scale-[.55] md:scale-[.6] xl:scale-[0.65] -ml-20 sm:-ml-28 md:-ml-24 lg:-ml-28 xl:-ml-28 pl-0'>
                <img src={Group} alt='market-watch'/>
                <img src={Slogo} alt='SaaS Insider'/>
                <img src={Fiverr} alt='Fiver'/>
            </div>
            <button className='pt-2 bg-primary text-primaryWhite py-[7px] w-fit px-5 rounded-md text-center flex justify-start items-start'>Contact Us</button>
        </div>
        <div className='z-10 flex flex-1 transform justify-center'>
            <img src={SocialMedia} alt='' className='l-image transform scale-[1] md:scale-[1.1] xl:scale-[1.1]'/>
        </div>       
    </div>
   </div>

  )
}

export default Banner