import React from 'react'
import Home from './HomePage/Home'
import Navbar from './HomePage/Navbar';
import Service from './HomePage/Services/Service';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Industries from './idustries/Industries';
import AboutUs from './About/AboutUs';
import Blog from './Blog/Blog';
import Contact from './HomePage/Contact';
function Index() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Navbar  />}>
        <Route index element={<Home/>} />  
        <Route path="services" element={<Service />} />
        <Route path="industries" element={<Industries/>} />  
        <Route path="about" element={<AboutUs />}/>  
        <Route path="blogs" element={<Blog />} />  
        <Route path="contact" element={<Contact />} />
      </Route>
      
      {/* <Route path="blogs" element={<Blogs />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NoPage />} /> */}
    </Routes>

    </BrowserRouter>

  )
}

export default Index