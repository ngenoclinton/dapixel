import React from 'react'
import Logo from './resources/Logo.svg'; 
import { Outlet, Link } from 'react-router-dom';
import {BiLogoFacebook, BiLogoInstagram, BiLogoLinkedinSquare, BiLogoTwitter} from "react-icons/bi"
function Footer() {
  return (
    <div className='bg-primary mt-28'>
        <div className='flex flex-col sm:flex-row space-y-10 sm:space-y-0  sm:justify-evenly md:justify-between mx-auto max-w-5xl py-12 xs:py-20 lg:px-0 '>
            <div className='flex flex-1 flex-col xs:flex-col text-center sm:text-left text-base  sm:text-sm justify-center w-full px-5 space-y-6'>
                <div>
                  <Link to='/'> <img src={Logo} alt="Logo" className='transform scale-[.75] -ml-6 mx-auto'/> </Link>
                </div>
                <div className='space-y-5 items-center'>
                    <div className='flex flex-col space-y-3 text-base sm:text-sm'>
                        <span>REBORN STUDIO AB</span>
                        <span>Org.nr: 559264-1871</span>
                        <span>Lunar Holding LDA</span>
                        <span>info@dapixel.io</span>
                        <span>+456-20821802</span>
                    </div>
                    <div className='hidden sm:flex space-x-6 text-base items-center'>
                        <BiLogoFacebook className=''/>
                        <BiLogoTwitter className=''/>
                        <BiLogoLinkedinSquare/>
                        <BiLogoInstagram/>
                    </div>
                </div>
            </div>
            <div className='flex flex-1 flex-col sm:flex-row justify-evenly sm:justify-between items-center mx-auto space-y-5 sm:space-x-0'>
                <div className=' flex flex-1 flex-col text-center sm:text-left top-0 xs:space-x-0 space-y-6'>
                    <div className='font-semibold text-xl'>
                        <span >Company</span>
                    </div>
                    <div className='flex flex-col space-y-3 pl-1 text-base sm:text-sm '>
                        <span className=''>Home</span>
                        <span>About Us</span>
                        <span>Lunar Blog</span>
                        <span>Our Specialists</span>
                        <span>Contact Us</span>
                        <span>Privacy & Policy</span>
                    </div>  
                </div>
                <div className=' flex flex-1 flex-col text-center sm:text-left space-y-6'>                 
                    <div className='font-semibold text-xl space-x-3 xs:space-x-0'>
                        <span >Services</span>
                    </div>
                    <div className='flex flex-col justify-evenly text-center sm:text-left space-y-3 xs:pl-1 text-base sm:text-sm '>
                        <span>Digital Marketing</span>
                        <span>Free Audit</span>
                        <span>Google Ads</span>
                        <span>Cryptocurrency Marketing</span>
                        <span>SEO</span>
                        <span>SAAS Marketing</span>
                        <span>Website & SEO</span>
                    </div>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer