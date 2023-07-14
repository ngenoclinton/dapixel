import React,{Fragment, useState} from 'react';
import { Outlet, Link } from 'react-router-dom';
import Logo from './resources/Logo.svg'; 

function Navbar() {
    let [open, setOpen] = useState(true);
  return (
  <Fragment className="h-full">
    <div  className= {`top-0 left-0 w-full z-50 shadow-sm`}>
        <div className='max-w-4xl  lg:max-w-full mx-auto  flex justify-between py-auto py-6 px-16 xl:px-24 shadow-sm text-primaryDark w-full items-center gap-8 lg:gap-0'>
            <div className='flex-1 py-auto '><Link to='/'> <img src={Logo} alt="Logo" className='text-xl sm:text-xl'/> </Link></div>
            <div className='hidden md:flex flex-1 space-x-10 justify-center text-[16px] w-full py-auto items-center'>
                <ul className='hide md:flex  space-x-5 text'>
                    <li><Link to='services'>Services</Link></li>                
                    <li><Link to="industries">Industries</Link></li>
                    <li><Link to="about">About Us </Link></li>
                    <li><Link to='blogs'><span>Blog</span></Link></li>
                </ul>            
            </div>
            <div className='flex space-x-10 justify-center py-auto'>        
                <button className='hidden sm:block w-fit text-primary border-[1px] border-primary rounded-full px-3 xl:px-5 py-1'><Link to="contact">Contact Us</Link></button>
                <div onClick={()=>setOpen(!open)} className='show right-8 top-6 cursor-pointer transition-all duration-1000 ease-in text-4xl'>
                <ion-icon name={open?'menu':'close'} className=""></ion-icon></div>
            </div>
                  
        </div>    
        {/* Mobile */}
        <div className='w-full h-auto'>
            {!open && (
                <div
                    className={`transition-all duration-1500 ease-in lg:hidden flex-col space-y-6 justify-center text-[16px] h-full w-full bg-slate-600 absolute z-50 pt-20  pl-20 mx-auto items-center text-primaryWhite`
                    }                
                >
                    <ul className="flex flex-col space-y-5 text-base md:text-base">
                        <li onClick={()=>setOpen(!open)}>
                            <Link to="services">Services</Link>
                        </li>
                        <li onClick={()=>setOpen(!open)}>
                            <Link to="industries">Industries</Link>
                        </li>
                        <li onClick={()=>setOpen(!open)}>
                            <Link to="about">About Us</Link>
                        </li>
                        <li onClick={()=>setOpen(!open)}>
                            <Link to="blogs">
                            <span>Blog</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="flex flex-col justify-center" onClick={()=>setOpen(!open)}>
                    <Link to="contact">  <button className="w-fit text-primary border-[1px]  border-primary rounded-full px-5 py-1 text-base">
                                Contact Us
                        </button></Link>
                    </div>
                </div>
                )}
        </div>
    </div>
    
    <Outlet />
    </Fragment>
  )
}

export default Navbar