import React,{Fragment} from 'react';
import { Link, Outlet} from "react-router-dom";

import Navbar from './Navbar';
import Banner from './Banner';
import  Wave from './Wave';
import HowItWorks from './HowItWorks';
import Book from './Book';
import Testimonials from './Testimonials';
import Articles from './Articles';
import Why from './Why';
import Footer from './Footer';

function Home() {
  return (
    <Fragment>
    <Outlet />
    <div className='text text-center relative w-full h-full'>
      <Banner className='relative'/>
      <Wave className='absolute'/>
      <HowItWorks className='z-12' />  
      <Book />   
      <Testimonials />
      <Articles />
      <Why/>
      <Footer />
    </div>
    </Fragment>
  )
}

export default Home