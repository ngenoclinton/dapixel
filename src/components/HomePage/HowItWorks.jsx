import React from 'react';
import Testimonial1 from './resources/Testimonial1.png';
import Competitors from './resources/Competitors.png';
import Strategy from './resources/Strategy.png';
import Launch from './resources/Launch.png';
const HowItWorks = () =>{
    return (
        <div className='z-12 mt-24 md:mt-28 space-y-10'>
            <div className='font-bold text-3xl text-center max-w-5xl mx-auto px-5 md:px-10 xl:px-5 space-y-8'>  
                <div className='text-center flex flex-col space-y-3'>
                  <h1 className='text-center'>How It works</h1>
                  <span className='h-[3px] w-16 bg-primary z-12 mx-auto'></span>
                </div>

                <div className='space-y-8 flex flex-col'>
                    <div className='flex relative'>
                    <span className='absolute z-10 text-primary opacity-10 text-4xl md:text-5xl lg:text-6xl top-0 -left-4'>01</span>
                    <div className='relative flex flex-col-reverse  space-y-4 h-fit sm:space-y-0 sm:flex-row bg-primaryWhite shadow-xl p-8 sm:w-[95%] lg:w-[65%] rounded-sm space-x-5'>                    
                        <img src={Testimonial1} alt='' className='transform scale-[0.9] sm:scale-1' />
                        <div className='flex flex-col justify-center space-y-4'>
                            <span className='text-left text-3xl text-primary'>Goal</span>
                            <span className='h-[2px] w-12 bg-primary'></span>
                            <span className='text-left text-base font-normal'>To help your company grow, we want to understand your goals. With that, we can provide you with a complete road map towards achieving them.</span>
                        </div>
                    </div>
                    </div>
                    {/*  */}
                    <div className='flex relative justify-end h-full'> 
                    <span className='absolute z-10 text-primary opacity-10 text-4xl md:text-5xl lg:text-6xl top-0 -right-2 flex justify-end'>02</span>                    
                    <div className='relative flex flex-col-reverse  space-y-4 h-fit sm:space-y-0 sm:flex-row bg-primaryWhite shadow-xl p-8 sm:w-[95%] lg:w-[65%] rounded-sm space-x-5'> 
                        <img src={Competitors} alt='' className='transform scale-[0.9] sm:scale-1' />
                        <div className='flex flex-col justify-center space-y-4'>
                            <span className='text-left text-3xl text-primary'>Competitors</span>
                            <span className='h-[2px] w-12 bg-primary'></span>
                            <span className='text-left text-base font-normal'>Everybody wants to be the best in their field. To achieve success, we audit your competitors and find out what is working and what is not. All this to help you save time, money, and effort on things that do not work and focus on what does.</span>
                        </div>
                    </div>
                    </div>
                    {/*  */}
                    <div className='flex relative'>
                    <span className='absolute z-10 text-primary opacity-10 text-4xl md:text-5xl lg:text-6xl top-0 -left-2'>03</span>
                        <div className='relative flex flex-col-reverse  space-y-4 h-fit sm:space-y-0 sm:flex-row bg-primaryWhite shadow-xl p-8 sm:w-[95%] lg:w-[75%] rounded-sm space-x-5'>                    
                            <img src={Strategy} alt='' className='transform scale-[0.9] sm:scale-1' />
                            <div className='flex flex-col justify-center space-y-4'>
                                <span className='text-left text-3xl text-primary'>Strategy</span>
                                <span className='h-[2px] w-12 bg-primary'></span>
                                <span className='text-left text-base font-normal'>Understanding the steps needed to beat your competitors is essential when understanding the length of the project, and how we will effectively tackle your digital marketing.​ We also make sure to get you the most value for your money.​</span>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className='flex relative justify-end'>   
                        <span className='absolute z-10 text-primary opacity-10 text-4xl md:text-5xl lg:text-6xl top-0 -right-4 flex justify-end'>04</span>                
                    <div className='relative flex flex-col-reverse  space-y-4 h-fit sm:space-y-0 sm:flex-row bg-primaryWhite shadow-xl p-8 sm:w-[95%] lg:w-[65%] rounded-sm space-x-5'>
                        <img src={Launch} alt='' className='transform scale-[0.9] sm:scale-1'/>
                        <div className='flex flex-col justify-center space-y-4'>
                            <span className='text-left text-3xl text-primary'>Launch</span>
                            <span className='h-[2px] w-12 bg-primary'></span>
                            <span className='text-left text-base font-normal'>Launching everything into action will be the start of your new marketing strategy. Taking every step we have planned and carefully following the laid-out road map to reach your business goals.​</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HowItWorks;