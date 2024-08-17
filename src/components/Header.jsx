import React, { useState } from 'react'
import logo from "./images/logo.png";
import { Link } from "react-router-dom";
// import { LuUser } from "react-icons/lu";
// import { PiHandbag } from "react-icons/pi";
import { AiOutlineAlignLeft } from "react-icons/ai";
import categoriesData from './json/category.json';


const Header = () => {

  const [navbar, setNavbar] = useState(false);

  const dropdownFunc = () => {
    navbar === false ? setNavbar(true) : setNavbar(false)
  }

  return (
    <>
      <div className="bg-white">


        {/* navbar */}
        <div className="bg-white flex py-5 px-2 md:px-5 md:py-5 items-center justify-between fixed w-full z-50" style={{ borderBottom: "1px solid lightgrey" }}>
          {/* dropdown icon  */}
          <div className="flex-row block md:hidden">
            <AiOutlineAlignLeft onClick={dropdownFunc} className="text-3xl mx-2 cursor-pointer" />
          </div>

          <div></div>

          {/* logo image */}
          <Link to="/" className="flex flex-row items-center">
            <img className="w-10" src={logo} alt="logo" />
            {/* <span style={{ color: "#000e40", fontSize: "42px"}}>ELMIRA</span> */}
          </Link>

          {/* navbar links */}
          <div className="items-center justify-around hidden md:block">
            {categoriesData.categories.filter((curElem, index) => index < 8 ).map((category, index) =>
              <Link to={category.link} className="text-sm font-semibold text-slate-800 mx-2" key={index}>{category.name.toUpperCase()}</Link>
            )}
          </div>

          {/* navbar icons */}
          <div className="flex flex-row">
            {/* <Link to="#"><LuUser className="text-2xl mx-2" /></Link>
            <Link to="#"><PiHandbag className="text-2xl mx-2" /></Link> */}
          </div>
        </div>



        {/* navbar responsive for mobile */}
        <div className="relative z-50">
        <div className="mt-20 bg-white w-full fixed h-screen overflow-y-auto pt-1 pb-20" style={{ display: navbar===false ? "none" : "block" }}>
          
        {categoriesData.categories.map((category, index) =>
          <Link to={category.link} key={index} onClick={dropdownFunc}>
            <div className="bg-gray-100 flex flex-row justify-between align-middle p-5 mb-3">
              <div className="text-lg flex flex-col justify-center align-middle">{category.name.toUpperCase()}</div>
              <img src={`/images/${category.resp_image}`} alt={category.name} className="h-28" />
            </div>
          </Link>
        )}

        

        </div>
        </div>



        {/* carousel */}
        <div className="pt-20">

        </div>
        


      </div>
    </>
  )
}

export default Header
