import React, { useEffect, useState } from 'react'
import { GrNext, GrPrevious } from "react-icons/gr";
import { FaCircle } from "react-icons/fa";
import productsData from './json/products.json';

import productdetails_icon1 from "./images/product-details-icon1.webp";
import productdetails_icon2 from "./images/product-details-icon2.webp";
import productdetails_icon3 from "./images/product-details-icon3.webp";
import productdetails_icon4 from "./images/product-details-icon4.webp";

import downsidebanner1 from "./images/downside-banner1.webp";
import downsidebanner2 from "./images/downside-banner2.webp";
import downsidebanner3 from "./images/downside-banner3.webp";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'; // You can create this CSS file for styling

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useNavigate, useParams } from 'react-router-dom';

import {BASE_URL} from "./Pages/BaseUrl";
import { Helmet } from 'react-helmet';

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [useProducts, setUseProducts] = useState([]);

  useEffect(() => {
    const productsFilteredData = productsData?.products.filter((curElem) => {
        if (`/products/${params.productname}` === curElem.product_links) {
            return true;
        } else {
            return false;
        }
    });
    setUseProducts(productsFilteredData);
}, [params.productname]);

  // carousel
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  // carousel settings 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
        
          
          {
            useProducts?.length === 0 ? 
              navigate("/notfound")
               :                                       
            useProducts?.filter((curElem, index) => index < 1 ).map((products, index) => {
              return (
                
                <div className="grid grid-cols-1 sm:grid-cols-2" key={index}>

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{products.helmet.title}</title>
                    <meta name="description" content={products.helmet.description} />
                    <link rel="canonical" href={`${BASE_URL}${products.helmet.cannonical_href}`} />
                </Helmet>

                    {/* image carousel  */}
                    <div className="relative">
                      <div className="absolute top-0 left-0 rounded-md p-1 m-8 z-40" style={{ background: "#761c1a", color: "#000e40" }}>
                          <span className="text-sm font-semibold px-2 text-white">{products.category.toUpperCase()}</span>
                      </div>
                      <div className="carousel-container">
                        <Slider {...settings}>
                          {products.product_images.map((image, index) => (
                            <div key={index}>
                              <img src={`/images/${image}`} alt={products.name} className="object-cover w-full" style={{ height: "89.5vh" }} />
                            </div>
                          ))}
                        </Slider>
                      </div>                      
                    </div>
            
                    <div className="product-details-scroll-id">
                        <div className="flex flex-col p-4 md:p-[10%]">

                            {/* product content */}
                            <h1 className="text-lg sm:text-2xl text-slate-700 pb-2">{products.name}</h1>
                            <div className="text-lg sm:text-xl font-semibold pb-6">
                              <span>{products.sellingprice}</span>
                              <span className="text-gray-500 line-through pl-3">{products.price}</span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-bold" style={{ color: "#761c1a" }}>COLOR</span>
                              <hr className="mt-4 mb-6" />
                              <div className="flex flex-row">
                                
                                <div className="flex-col text-center pr-4">
                                  <div className="w-14 h-14 rounded-full border-2 border-transparent hover:border-slate-900 cursor-pointer" style={{ backgroundColor: products.color }}></div>
                                  <span className="text-xs">{products.colorname}</span>
                                </div>
                            </div>
                            </div>
                            <div className="w-full bg-slate-600 flex my-6">
                              <button className="w-full text-center py-4 text-white text-sm font-semibold opacity-60" style={{ backgroundColor: "#000e40" }} disabled>Add to Cart</button>
                            </div>
                            <div className="flex flex-row justify-between mb-6">
                              <div className="flex flex-col text-center w-12">
                                <img src={productdetails_icon1} alt="" className="h-12 w-12" />
                                <span className="text-xs text-slate-500">Recycled PET</span>
                              </div>
                              <div className="flex flex-col text-center w-12 ml-4 mr-2">
                                <img src={productdetails_icon2} alt="" className="h-12 w-12" />
                                <span className="text-xs text-slate-500 break-words">Convertible</span>
                              </div>
                              <div className="flex flex-col text-center w-12 ml-2 mr-4">
                                <img src={productdetails_icon3} alt="" className="h-12 w-12" />
                                <span className="text-xs text-slate-500">Laptop Storage</span>
                              </div>
                              <div className="flex flex-col text-center w-12">
                                <img src={productdetails_icon4} alt="" className="h-12 w-12" />
                                <span className="text-xs text-slate-500">Trolley Sleeves</span>
                              </div>
                            </div>
                            
                            {/* accordion */}
                            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                              <AccordionHeader onClick={() => handleOpen(1)} className="font-normal text-md">Product Details</AccordionHeader>
                              <AccordionBody>
                                <div>

                                    <div className="text-base text-black mb-3">{products.product_details.content}</div>

                                    <div>
                                      {products.product_details.points?.map((curElem, index) => {
                                        return (
                                          <div className="flex flex-row mb-3" key={index}>
                                            <div className="w-10 pt-2">
                                              <FaCircle style={{ fontSize: "7px" }} />
                                            </div>
                                            <span className="text-base text-black">{curElem}</span>
                                          </div>
                                        )
                                      })}     
                                    </div>

                                </div>
                              </AccordionBody>
                            </Accordion>
                            
                            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                              <AccordionHeader onClick={() => handleOpen(2)} className="font-normal text-md">
                                Specifications
                              </AccordionHeader>
                              <AccordionBody>
                                <div className="flex flex-col pt-4 text-black">
                                  <div className="text-base pb-5">
                                    <span className="font-bold">Colour : </span>
                                    <span>{products.specifications.color}</span>
                                  </div>

                                  <div className="text-base pb-5">
                                    <span className="font-bold">Material : </span>
                                    <span>{products.specifications.material}</span>
                                  </div>

                                  <div className="text-base pb-5">
                                    <span>Outer : </span>
                                    <span>{products.specifications.outer}</span>
                                  </div>

                                  <div className="text-base pb-5">
                                    <span>Inner : </span>
                                    <span>{products.specifications.inner}</span>
                                  </div>

                                  <div className="text-base pb-5">
                                    <span className="font-bold">Dimensions : </span>
                                    <span>{products.specifications.dimensions}</span>
                                  </div>

                                  <div className="text-base pb-5">
                                    <span className="font-bold">Care : </span>
                                    <span>products.specifications.care</span>
                                  </div>

                                  <div className="text-base pb-5">
                                    <span className="font-bold">Country of origin : </span>
                                    <span>{products.specifications.country_of_origin}</span>
                                  </div>

                                  <div className="text-base pb-5">
                                    <span className="font-bold">Manufacturer, Packer, and Importer name : </span>
                                    <span>{products.specifications.manufacturer}</span>
                                  </div>

                                </div>
                              </AccordionBody>
                            </Accordion>

                            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                              <AccordionHeader onClick={() => handleOpen(3)} className="font-normal text-md">
                                Delivery Time & Returns
                              </AccordionHeader>
                              <AccordionBody>
                                  <div className="flex flex-col pt-4 text-black">
                                    <div className="text-base pb-5 flex flex-col">
                                      <span className="font-bold pb-2">Delivery</span>
                                      <span>Dispatch to Courier in 4-5 Days.</span>
                                    </div>

                                    <div className="text-base pb-5 flex flex-col">
                                      <span className="font-bold pb-2">Free Shipping</span>
                                      <span>Shipping is free for all prepaid orders above Rs.749.</span>
                                      <span>A charge of Rs.49 is applied to all Prepaid orders below Rs.749.</span>
                                    </div>

                                    <div className="text-base pb-5 flex flex-col">
                                      <span className="font-bold pb-2">Cash on Delivery</span>
                                      <span>Rs.99 extra charges for all Cash On Delivery orders.</span>
                                    </div>

                                    <div className="text-base pb-5 flex flex-col">
                                      <span className="font-bold pb-2">Returns</span>
                                      <span>Hassle-free returns for 30 Days</span>
                                    </div>
                                  </div>
                              </AccordionBody>
                            </Accordion>

                        </div>
                    </div>

                </div>
                
              )
            })
          }
          



        
        
        {/* downside banner  */}
        <div className="py-12">

          <div className="sm:flex">
            <div className="sm:flex-1">
              <div className="h-full md:h-[80vh] w-full py-10 px-4 md:px-[10%] flex flex-col justify-center align-middle">
                <h1 className="text-2xl md:text-4xl font-semibold pb-4">THE MAGIC IN THE MAKING</h1>
                <p className="text-base">Thoughtful and conscious creation is woven into every strand of Meridian. The entire process - from the collection of the bottles to them being chipped into flakes, to becoming crafted eco-twill - makes Meridian (and you!)  a carrier of change and sustainability.</p>
              </div>
            </div>
            <div className="sm:flex-1 overflow-hidden flex justify-center items-center bg-gray-100"><img src={downsidebanner1} alt="banner" className="h-full w-full object-contain" /></div>
          </div>

          <div className="sm:flex">
            <div className="sm:flex-1 overflow-hidden flex justify-center items-center bg-gray-100"><img src={downsidebanner2} alt="banner" className="h-full w-full object-contain" /></div>
            <div className="sm:flex-1">
              <div className="h-full md:h-[80vh] w-full py-10 px-4 md:px-[10%] flex flex-col justify-center align-middle">
                <h1 className="text-2xl md:text-4xl font-semibold pb-4">FORM FOLLOWS FUNCTION</h1>
                <p className="text-base">Thoughtfully designed for more function, every inch of the briefpack serves a specific purpose (and then some!) for your everyday essentials.</p>
              </div>
            </div>
          </div>

          <div className="sm:flex">
            <div className="sm:flex-1">
              <div className="h-full md:h-[80vh] w-full py-10 px-4 md:px-[10%] flex flex-col justify-center align-middle">
                <h1 className="text-2xl md:text-4xl font-semibold pb-4">(RE)USE FOR A LIFETIME</h1>
                <p className="text-base">Finding form in formlessness. Just being one with the planet - while carrying function, utility, and an aesthetic that goes well with doing good for the Earth up your shoulder. Available in 5 soft, muted hues reminiscent of the natural environment, the sustainable briefpack is all for the world around us.</p>
              </div>
            </div>
            <div className="sm:flex-1 overflow-hidden flex justify-center items-center bg-gray-100"><img src={downsidebanner3} alt="banner" className="h-full w-full object-contain" /></div>
          </div>

        </div>
    
    </>
  )
}

// functions for carousel indicators 
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', color: "grey" }}
      onClick={onClick}
    >
      <GrNext className="hover:text-slate-950" />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', color: "grey" }}
      onClick={onClick}
    >
      <GrPrevious className="hover:text-slate-950" />
    </div>
  );
};
export default ProductDetails