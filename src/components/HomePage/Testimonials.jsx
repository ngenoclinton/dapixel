import React from 'react'
import QuoteLeft from './resources/quote-left.png';
import QuoteImage from './resources/QuoteImage.png'
import ButtonLeft from './resources/ButtonLeft.png';
import ButtonRight from './resources/ButtonRight.png';

import { FcRight, FcLeft } from 'react-icons/fc';
import { AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import { BiArrowBack, BiChevronDown, BiRightArrowAlt} from "react-icons/bi";
function Testimonials() {
  return (
    <div className='mt-24 md:mt-32 h-fit'>
        <div className='font-bold text-3xl text-center max-w-5xl mx-auto px-4 space-y-10 md:space-y-0 h-fit'>
            <div className='text-center flex flex-col space-y-3 mb-5'>
                <h1 className='text-center text-2xl sm:text-3xl md:text-4xl'>Our Testimonials</h1>
                <span className='h-[3px] w-16 bg-primary z-12 mx-auto'></span>
            </div>

            <div className='flex relative mx-auto'>
                <div className='relative flex bg-primaryWhite shadow-xl px-4 xs:px-12 sm:px-20 py-7 md:py-16  rounded-sm md:space-x-12 max-w-[90%] mx-auto'>  
                    <div className='hidden flex-col relative md:flex'>
                        <img src={QuoteImage} alt='QuoteImage' className='transform scale-[1] md:scale-[1.2] bottom-20 md:bottom-6 ml-5' />
                    </div>                    
                    <div className='flex flex-col pt-4 space-y-2 md:max-w-[80%] w-full'>
                        <span className='text-left text-base xl:text-lg leading-relaxed font-normal w-full'>Lunar Strategy helped us with our digital marketing for 4 months now and still helps us. Great service and highly recommended.</span>
                        <div className='text-left space-x-2'>
                            <span className='text-left text-sm text-primary'>— Kimmo Hakonen - Skrum Master at DaGear AB</span>
                            <div className='flex space-x-5 justify-end pt-4'>
                            <AiOutlineArrowLeft alt='ButtonLeft' className='text-lg cursor-pointer text-[#959EAD]' />
                            <AiOutlineArrowRight alt='ButtonRight' className='text-lg cursor-pointer text-primary' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials;