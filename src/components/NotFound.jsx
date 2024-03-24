import React from 'react'
import notfound404 from "./images/notfound.gif";
import { Link } from "react-router-dom";
import Carousel from './Carousel';

const NotFound = () => {
  return (
    <>
      <Carousel />

      <div className="w-full bg-white flex justify-center items-center py-10 flex-col">
        
        <img src={notfound404} alt="NOT FOUND PAGE" className="mb-8" />

        <h3 className="mb-12">error code: 404</h3>

        <div className="flex flex-col font-bold fs text-2xl sm:text-4xl items-center py-4 mb-12">
          <span>OOPS, WE CAN'T FIND WHAT</span>
          <span>YOU'RE LOOKING FOR !</span>
        </div>

        <Link to="/" className="bg-black text-white px-6 py-2 text-sm border-2 border-black my-5 hover:bg-white hover:text-black hover:border-2 hover:border-black">Return Home</Link>

      </div>

    </>
  )
}

export default NotFound