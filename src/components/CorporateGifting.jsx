import React from 'react'
import Carousel from './Carousel'

import giftingbanner1 from "./images/giftingweb1.webp"
import giftingbanner2 from "./images/giftingweb2.webp";
import giftingbanner3 from "./images/giftingweb3.webp";
import giftingbanner4 from "./images/giftingweb4.webp";
import giftingclientslogobanner from "./images/gifting-clients-logo.webp";

import { Link } from 'react-router-dom';

const CorporateGifting = () => {
  return (
    <>
        <Link to="#"><img src={giftingbanner1} alt="banner" className="hidden sm:block" /></Link>
        <Link to="#"><img src={giftingbanner2} alt="banner" className="block sm:hidden" /></Link>


        <div className="text-center font-semibold text-2xl mt-14 mb-4">WHAT WE OFFER</div>

        <Carousel />

        <div className="sm:flex">
            <div className="sm:flex-1 overflow-hidden">
                <img src={giftingbanner3} alt="banner" className="h-[70vh] w-full object-cover p-4" />
                <div className="flex flex-col mb-4 px-4">
                    <span className="text-lg font-semibold mb-2">EMPLOYEE BOARDING GIFTS</span>
                    <span className="text-sm mb-6">Indulge your new hires with customised onboarding kits that include incredibly functional products and give them a warm welcome.</span>
                    <div className="mb-6">
                        <Link to="#" className="text-sm font-semibold py-2 px-8 text-white" style={{ backgroundColor: "#000e40" }}>EXPLORE</Link>
                    </div>
                </div>
            </div>
            <div className="sm:flex-1 overflow-hidden">
                <img src={giftingbanner4} alt="banner" className="h-[70vh] w-full object-cover p-4" />
                <div className="flex flex-col mb-4 px-4">
                    <span className="text-lg font-semibold mb-2">EMPLOYEE BOARDING GIFTS</span>
                    <span className="text-sm mb-6">Indulge your new hires with customised onboarding kits that include incredibly functional products and give them a warm welcome.</span>
                    <div className="mb-6">
                        <Link to="#" className="text-sm font-semibold py-2 px-8 text-white" style={{ backgroundColor: "#000e40" }}>EXPLORE</Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="py-12">

          <div className="sm:flex">
            <div className="sm:flex-1">
              <div className="h-full md:h-[80vh] w-full py-10 px-4 md:px-[10%] flex flex-col justify-center align-middle">
                <h1 className="text-2xl md:text-4xl font-semibold pb-4">CLIENTS WE'VE WORKED WITH</h1>
                <p className="text-base">Thoughtful and conscious creation is woven into every strand of Meridian. The entire process - from the collection of the bottles to them being chipped into flakes, to becoming crafted eco-twill - makes Meridian (and you!)  a carrier of change and sustainability.</p>
              </div>
            </div>
            <div className="sm:flex-1 overflow-hidden flex justify-center items-center bg-gray-100"><img src={giftingclientslogobanner} alt="banner" className="h-full w-full object-contain py-4 px-4 md:py-4 md:px-6" /></div>
          </div>

        </div>

        <div className="text-md px-2 sm:px-10 mb-14">
            <p className="font-semibold mb-3">What is the Significance of Corporate Gifting?</p>
            <p className="mb-3"><span className="font-semibold">Corporate gifting</span> is a wonderful opportunity to communicate with and express gratitude to your partners, customers, and potential customers. These presents’ primary goal is to build a strong bond and intimate friendship between the recipients</p>
            <p className="font-semibold mb-3">Strengthen, maintain, and create new Relationships.</p>
            <p className="mb-3">By giving thoughtful corporate Diwali gifts that will serve as a constant reminder to all your recipients of how important they are to you, you may cultivate new and current relationships while setting yourself apart from your rivals. Always keep in mind that first impressions, and subsequent impressions, are everything, so it’s crucial to establish the correct tone from the start of your working relationship by giving <span className="font-semibold">company gifts.</span></p>
        </div>

        <div className="text-center my-16">
            <Link to="/contact-us" className="text-md font-semibold py-4 px-20 text-white" style={{ backgroundColor: "#000e40" }}>CONTACT US</Link>
        </div>

    </>
  )
}

export default CorporateGifting