import React from 'react'
import Wave from '../HomePage/Wave'
import Why from '../HomePage/Why'
import Footer from '../HomePage/Footer'
import aboutImg from './resource/aboutImg.png'
import eduresourceImg from './resource/educationalresources.svg';
import  productRelease from './resource/ProductRelease.svg';
import Contact from '../HomePage/Contact';

function AboutUs() {
  return (
    <div className='relative'>
        <div className='mx-auto flex flex-col lg:flex-row z-10 md:max-w-3xl lg:max-w-4xl xl:max-w-6xl sm:pt-8 space-y-20 md:space-y-0'>           
            <div className='flex flex-1 flex-col mt-10 xl:mt-16 text-center md:text-left z-10  max-w-full space-y-5 lg:space-y-8 px-7 xs:px-16 xl:px-0 xl:pl-20 leading-relaxed'>            
                <h1 className='font-bold leading-relaxed text-2xl xs:text-3xl sm:text-3xl lg:text-5xl'>Consistency - Drive - Curiosity - Passion​</h1>
                <span className='text-base max-w-2xl lg:max-w-full leading-relaxed'>In a constantly evolving and competitive digital world, it is imperative to stay on top and in the know, be highly visible among search results and feeds, and be responsive to your audience.</span>                
            </div>  
            <div className='z-10 flex flex-1 mx-auto items-center justify-center'>
              <img src={aboutImg} alt='serviceImg' className='-mt-24 lg:-mt-12 xl:-mt-24 transform scale-[0.8] lg:scale-[.8]'/>               
            </div>               
        </div>
       <Wave />
        <div className='z-12 mt-16 sm:mt-16 lg:mt-20 space-y-10'>
            <div className='font-bold text-3xl text-center max-w-4xl lg:max-w-5xl mx-auto px-5 md:px-10 xl:px-5 lg:space-y-8'>  
                <div className='text-center flex flex-col space-y-3'>
                  <h1 className='text-center text-xl sm:text-2xl md:text-3xl'>Make a Difference For Your Business!</h1>
                  <span className='h-[3px] w-16 bg-primary z-12 mx-auto'></span>
                </div>

                <div className='space-y-1 lg:space-y-8 flex flex-col'>                                        
                    <div className='flex flex-col lg:flex-row-reverse space-y-4 h-fit sm:space-y-0 lg:gap-10 bg-primaryWhite p-4 sm:p-8  rounded-sm '>                    
                    <div> <img src={eduresourceImg} alt='' className='mx-auto flex justify-center transform scale-[.8] lg:scale-[1.1]' /></div>
                    <div className='flex fl flex-col justify-center space-y-3 lg:max-w-[600px] text-left w-full'>                            
                        <span className=' text-base font-normal leading-relaxed'>We understand that not every company has an in-house department that is always updated and tracks the algorithms, trends, and changes within digital marketing, but we strongly believe every company should have somebody to do so! </span>
                        <span className=' text-base font-normal'>Therefore, we started Lunar Strategy digital marketing agency – to offer companies solutions that are completely customized to fit their business needs and goals.</span>
                        <span className=' text-base font-normal'>We tailor high-performing marketing strategies intended to serve and benefit your company long term. </span>
                        <span className='text-left text-base font-normal'>Lunar Strategy is a professional digital marketing agency with a highly motivated team. </span>
                        </div>
                    </div>
                    {/*  */}
                    <div className='flex relative justify-end h-full'>                   
                        <div className='flex flex-col lg:flex-row space-y-4 h-fit sm:space-y-0 lg:gap-10 bg-primaryWhite p-4 sm:p-8  rounded-sm'> 
                            <div><img src={productRelease} alt='' className='mx-auto flex justify-center transform scale-[.8] lg:scale-[1.3]' /></div>
                            <div className='flex fl flex-col justify-center space-y-3 lg:max-w-[600px] text-left w-full'>
                                <span className='text-left text-base font-normal'>Most of us have profound hands-on experience working with and for Google and Google Ads directly. Our marketing masters also have experience with Facebook Ads and SEO. </span>
                                <span className='text-left text-base font-normal'>Our team lives and breathes innovative, quick, and smart digital marketing solutions. We want to help as many businesses as possible to find new potential customers, reengage with old ones to reach far beyond growth expectations. </span>
                                <span className='text-left text-base font-normal'>Book a meeting with us today, free of charge, and we’ll talk about how we can implement a thorough and solid marketing strategy.</span>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
        <Contact />
        <Why />
        <Footer/> 
    </div> 
  )
}

export default AboutUs