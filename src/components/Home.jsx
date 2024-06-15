import React from 'react'
import { Link } from "react-router-dom";

import banner2 from "./images/banner2.webp";
import mobilebanner2 from "./images/mobile-banner2.webp";
import banner4 from "./images/banner4.webp";
import mobilebanner4 from "./images/mobile-banner4.webp";

import squarebanner1 from "./images/square-banner1.webp";
import squarebanner2 from "./images/square-banner2.webp";
import squarebanner3 from "./images/square-banner3.jpg";
import squarebanner4 from "./images/square-banner4.webp";
import Carousel from './Carousel';


const Home = () => {
  return (
    <>
      <Carousel />
      <div>
        <Link to="#"><img src={banner4} alt="banner" className="hidden sm:block" /></Link>
        <Link to="#"><img src={mobilebanner4} alt="banner" className="block sm:hidden" /></Link>

        <div className="sm:flex pt-12 overflow-hidden">
          <Link to="#" className="sm:flex-1 overflow-hidden"><img src={squarebanner3} alt="banner" className="w-full object-cover hover:scale-125 transition duration-500 cursor-pointer" style={{ height: "50vh" }} /></Link>
          <Link to="#" className="sm:flex-1 overflow-hidden"><img src={squarebanner2} alt="banner" className="w-full object-cover hover:scale-125 transition duration-500 cursor-pointer" style={{ height: "50vh" }} /></Link>
        </div>

        <div className="sm:flex pb-12 overflow-hidden">
          <Link to="#" className="sm:flex-1 overflow-hidden"><img src={squarebanner1} alt="banner" className="w-full object-cover hover:scale-125 transition duration-500 cursor-pointer" style={{ height: "50vh" }} /></Link>
          <Link to="#" className="sm:flex-1 overflow-hidden"><img src={squarebanner4} alt="banner" className="w-full object-cover hover:scale-125 transition duration-500 cursor-pointer" style={{ height: "50vh" }} /></Link>
        </div>

        <Carousel />
        <div className="pt-12"></div>
        <Link to="#"><img src={banner2} alt="banner" className="hidden sm:block" /></Link>
        <Link to="#"><img src={mobilebanner2} alt="banner" className="block sm:hidden" /></Link>
      </div>
    
    </>
  )
}

export default Home
