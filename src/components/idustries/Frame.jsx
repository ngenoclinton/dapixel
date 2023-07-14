import React from 'react'
import Saassvg from './resource/saas.svg';
import B2bsvg from './resource/b2b.svg';
import Ecommercesvg from './resource/e-commerce.svg';
function Frame() {
  return (
    <div className='relative mt-10 mb-20'>
        <div className='flex flex-col max-w-5xl items-center mx-auto px-4 sm:px-10  lg:px-16 xl:px-0'>
            <h1 className='font-bold text-xl sm:text-2xl md:text-3xl text-center'>Our industries & expertise</h1>
            <div className='flex flex-col md:flex-row mt-10 md:space-x-6 space-y-6'>
              <div className='w-fit flex flex-col items-center shadow-xl px-4  xl:px-12 py-4 md:py-10 lg:py-10 rounded-2xl space-y-6'>
                  <div className=''><img src={Saassvg} alt='Saassvg' className='transform scale-[.9]'></img></div>
                  <h1 className='font-semibold text-xl'>SaaS</h1>
                  <p className='text-base lg:text-lg text-center'>We help a wide range of SaaS companies growing their lead generation online.</p>
              </div>
              <div className='flex flex-col items-center shadow-xl px-4  xl:px-12 py-4 md:py-10 rounded-2xl space-y-6'>
                <div className=''><img src={B2bsvg} alt='Saassvg' className='transform scale-[.9]'></img></div>
                <h1 className='font-semibold text-xl'>B2B</h1>
                <p className='text-base lg:text-lg text-center'>Professional funnel advertising optimized for generating leads for B2B.</p>
              </div>
              <div className='flex flex-col items-center shadow-xl px-4  xl:px-12 py-10 rounded-2xl space-y-6'>
                  <div className=''><img src={Ecommercesvg} alt='Saassvg' className='transform scale-[.9]'></img></div>
                  <h1 className='font-semibold text-xl'>E-Commerce</h1>
                  <p className='text-base lg:text-lg text-center'>We help a wide range of SaaS companies growing their lead generation online.</p>
              </div>
            </div>
            
        </div>        
    </div>
  )
}

export default Frame