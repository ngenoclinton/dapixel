import React from 'react'
import promotion from './resource/promotion.jpg';
import writer from './resource/writer.png';
import startup from  './resource/startup.png'
function Frame() {
  return (
    <div className='relative z-20 mt-12 mb-40 px-16 xl:px-0'>
        <div className='grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto '>
            <div className='flex flex-col shadow-xl bg-primaryWhite py-12 px-10 rounded-lg'>
                <div className=''><img src={promotion} className='mb-6'></img></div>
                <h1 className='font-bold text-2xl mb-4'>Facebook Marketing</h1>
                <p className='text-base mb-6 leading-relaxed'>Facebook Marketing is a simple, yet powerful marketing platform that allows businesses to market their products and services through the biggest social media platforms (including Instagram as part of Facebook). We offer a range of marketing services including ad campaigns for increasing brand awareness, promotions, customer loyalty, building your social media following, and much more.</p>    
                <span className='bg-primary text-center w-full py-2 px-10 text-base text-primaryWhite rounded-lg'>Book a free 30 minute meeting</span>                
            </div>
            <div className='flex flex-col shadow-xl bg-primaryWhite py-12 px-10 relative lg:top-20'>
                <div className=''><img src={promotion} className='mb-6'></img></div>
                <h1 className='font-bold text-xl sm:text-2xl mb-4'>Google Marketing</h1>
                <p className='sm:text-base mb-6 leading-relaxed'>Google gets over 3.5 billion searches per day and with Google Ads you increase your visability significantly. It is the platform that allows you to drive qualitative traffic and good-fit customers, to your business while they're searching for products and services. With Google Ads, you can boost your website traffic, receive more phone calls, and increase your in-store visits and more.</p>    
                <span className='bg-primary text-center w-full py-2 px-10 text-base text-primaryWhite rounded-lg'>Book a free 30 minute meeting</span>                
            </div>
            <div className='flex flex-col shadow-xl bg-primaryWhite py-12 px-10'>
                <div className=''><img src={startup} className='mb-6'></img></div>
                <h1 className='font-bold text-xl sm:text-2xl mb-4'>Search Engine Optimization</h1>
                <p className='sm:text-base mb-6 leading-relaxed'>Search engine optimization is the process behind the making your website easy to find. Our SEO experts will help you rank higher in search engines and drive more traffic to your site organically. This is the bread and butter of better marketing, where you can influence how many sales can be generated for a lower cost. We make sure your content is aligned with the requirements of SEO.</p>    
                <span className='bg-primary text-center w-full py-2 px-10 text-base text-primaryWhite rounded-lg'>Book a free 30 minute meeting</span>                 
            </div>
            <div className='flex flex-col shadow-xl bg-primaryWhite py-12 px-10 relative lg:top-20'>
                <div className=''><img src={writer} className='mb-6'></img></div>
                <h1 className='font-bold text-xl sm:text-2xl mb-4'>Web Content</h1>
                <p className='sm:text-base mb-6 leading-relaxed'>Do you need a content update on your site? Perhaps you are adding information to your website or building it from scratch? Professionally created web content, which is highly informative, well structured, and optimized for search engines is crucial for any web page. These factors not only make the content look great, but are also important for a high ranking among the search results. We also offer our clients continuous web content like blog posts, listicles and similar</p>    
                <span className='bg-primary text-center w-full py-2 px-10 text-base text-primaryWhite rounded-lg'>Book a free 30 minute meeting</span>                
            </div>
        </div>
    </div>
  )
}

export default Frame