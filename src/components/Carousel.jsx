import React from 'react'
import categoriesData from './json/category.json';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
// import ww from "./images/003.webp";

const Carousel = () => {
  
    // settings for slider 
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 2,
        initialSlide: 0,
        arrows: false,
        responsive: [
        {
            breakpoint: 1215,
            settings: {
            slidesToShow: 7,
            slidesToScroll: 3,
            }
        },
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 7,
            slidesToScroll: 3,
            }
        },
        {
            breakpoint: 750,
            settings: {
            slidesToShow: 5,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
            breakpoint: 450,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 310,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        }
        ]
    };

    return (
    <>
        {/* navbar categories slider */}
        <div className="py-5 overflow-hidden lg:px-28">
            <Slider {...settings}>  
            {categoriesData.categories.map((category, index) =>
                {
                    return (
                        <Link to={category.link} key={index}>
                            <div className="text-center mx-3">
                            <img src={`./images/${category.image}`} alt={category.name} className="h-24 w-24 m-auto object-contain rounded-full mb-2" />
                            <span className="text-black text-sm">{category.name}</span>
                            </div>    
                        </Link>
                    )
                }
            )}    
            </Slider>
        </div>
    </>
  )
}

export default Carousel