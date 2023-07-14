import React from 'react'

import {BiLogoFacebook, BiLogoInstagram, BiLogoLinkedinSquare, BiLogoTwitter} from "react-icons/bi"

function Contact() {
  return (
    <div className='max-w-5xl mx-auto my-28 px-4 md:px-10 lg:px-14 xl:px-0'>
        <div className='flex flex-col-reverse md:flex-row mx-auto justify-center rounded-xl border-t-[4px] border-primary shadow-lg py-12 md:py-16 px-4 sm:px-9 md:px-16 xl:px-24 gap-9 md:gap-0' >
            <div className='flex flex-col flex-1 space-y-8'>
                <div className='flex flex-col justify-center items-center sm:justify-start sm:items-start space-y-6'>
                <h1 className='font-bold text-center sm:text-left text-xl md:text-2xl'>Let us discuss your marketing strategy!</h1>
                <span className='h-1 w-16 bg-primary '></span>
                </div>
                <div className='space-y-6 items-center'>
                    <div className='flex flex-col space-y-3 text-base'>
                        <span>REBORN STUDIO AB</span>
                        <span>Org.nr: 559264-1871</span>
                        <span>Lunar Holding LDA</span>
                        <span>info@dapixel.io</span>
                        <span>+456-20821802</span>
                    </div>
                    <div className='hidden sm:flex space-x-6 text-lg items-center text-primary'>
                        <BiLogoFacebook className=''/>
                        <BiLogoTwitter className=''/>
                        <BiLogoLinkedinSquare/>
                        <BiLogoInstagram/>
                    </div>
                </div>
                <button className='rounded-lg py-2 px-8 sm:px-10 md:px-12 w-fit border-[2px] border-primary text-primary '>Book a free consultation</button>
            </div>
            <div className='flex flex-col flex-1'>
                <h1 className='font-semibold text-xl hidden md:block mb-3'>Or can also contact us here</h1>
                <h1 className='font-semibold text-2xl block md:hidden mb-3'>Leave your message</h1>

                <form action="/submit" method="POST" className='flex flex-col space-y-3'>
                    <label for="name" className='hidden'>Name:</label>
                    <input type="text" id="name" name="name" placeholder='Name' className='rounded-lg py-2 pl-5 pr-14 w-full border-[1px] border-[#C8C8C8] focus:outline-none' required/>
                    
                    <label for="email" className='hidden'>Email:</label>
                    <input type="email" id="email" name="email" placeholder='Email' className='rounded-lg py-2 pl-5 pr-14 w-full border-[1px] border-[#C8C8C8] focus:outline-none' required/>
                    
                    <label for="subject" className='hidden'>Subject:</label>
                    <input type="text" id="subject" name="subject" placeholder='Subject' className='rounded-lg py-2 pl-5 pr-14 w-full border-[1px] border-[#C8C8C8] focus:outline-none' required/>
                    
                    <label for="message" className='hidden'>Message:</label>
                    <textarea id="message" name="message" rows="5" placeholder='Message' className='rounded-lg py-2 pl-5 pr-14 w-full border-[1px] border-[#C8C8C8] focus:outline-none' required></textarea>
                    
                    <input type="submit" value="Send" className='focus:outline-white rounded-lg py-2 px-8 sm:px-10 md:px-12 w-fit w-full border-[2px] bg-primary text-primaryWhite mx-auto flex justify-center items-center'/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact