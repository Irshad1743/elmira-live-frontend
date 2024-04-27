import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import productsData from './json/products.json';
import advertisement from "./images/banner-advertisement.webp";
import mobileadvertisement from "./images/mobile-banner-advertisement.webp";
// import Carousel from './Carousel';
import {Helmet} from "react-helmet";
import { BASE_URL } from './Pages/BaseUrl';


const Products = () => {
    // get category name
    const params = useParams();
    const navigate = useNavigate();
    const [useProducts, setUseProducts] = useState([]);
    // const [hoverStates, setHoverStates] = useState(Array(productsData.products.length).fill(false));

    // // mouseenter & mouseleave function 
    // const handleMouseEnter = (index) => {
    //     // Set the hover state for the specific product to true
    //     const newHoverStates = [...hoverStates];
    //     newHoverStates[index] = true;
    //     setHoverStates(newHoverStates);
    // };
    // const handleMouseLeave = (index) => {
    //     // Set the hover state for the specific product to false
    //     const newHoverStates = [...hoverStates];
    //     newHoverStates[index] = false;
    //     setHoverStates(newHoverStates);
    // };

    useEffect(() => {
        const productsFilteredData = productsData?.products.filter((curElem) => {
            if (params.category === "all") {
                return true;
            } else if (params.category === curElem.category_links) {
                return true;
            } else {
                return false;
            }
        });
        setUseProducts(productsFilteredData);
    }, [params.category]);

    return (
        <>  
            <Helmet>
                <meta charSet="utf-8" />
                <title>Elmira Bags - Products Page</title>
                <meta name="description" content="Shop Elmira Bags, Excellence Craftmanship." />
                <link rel="canonical" href={`${BASE_URL}/collections/all`} />
            </Helmet>
            {/* <Carousel /> */}
            <div>    
                {/* banner image */}
                <div className="pb-5">
                    <Link to="#"><img src={advertisement} alt="banner" className="hidden sm:block" /></Link>
                    <Link to="#"><img src={mobileadvertisement} alt="banner" className="block sm:hidden" /></Link>
                </div>

                <h1 className="w-full py-4 text-2xl text-left px-4" style={{ fontWeight: "bold"}}>{params.category.toUpperCase()}</h1>

                {/* products */}
                <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
                    {
                        useProducts?.length === 0 ? 
                        navigate("/notfound")
                         :                                       
                        useProducts?.map((products, index) => {
                            return (
                                <div className="flex flex-col" key={index}>
                                    <div>
                                        <Link to={products.product_links}>
                                            {/* <div 
                                            // style={{ backgroundImage: !hoverStates[index] ? `url(/images/${products.product_images[0]})` : `url(/images/${products.product_images[1]})` }}
                                            style={{ backgroundImage: `url(/images/${products.product_images[0]})` }}
                                            className="relative h-60 sm:h-72 md:h-80 lg:h-96 w-full bg-cover bg-no-repeat bg-top object-cover"
                                            // onMouseEnter={() => handleMouseEnter(index)}
                                            // onMouseLeave={() => handleMouseLeave(index)}
                                            >
                                                <div className="absolute top-0 left-0 rounded-md p-1 m-2" style={{ background: "#761c1a", color: "#000e40" }}>
                                                    <span className="text-xs font-semibold px-2 text-white">{products.category?.toUpperCase()}</span>
                                                </div>
                                            </div> */}
                                            <div 
                                                className="relative h-60 sm:h-72 md:h-80 lg:h-96 w-full"
                                            >
                                                <img src={`/images/${products.product_images[0]}`} alt="img" className="w-full h-full bg-cover object-cover" />
                                            
                                                <div className="absolute top-0 left-0 rounded-md p-1 m-2" style={{ background: "#761c1a", color: "#000e40" }}>
                                                    <span className="text-xs font-semibold px-2 text-white">{products.category?.toUpperCase()}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="flex flex-col py-3">
                                        <h2 className="text-sm font-normal pb-1">{products.name}</h2>
                                        <div className="text-md font-semibold"><span>{products.sellingprice}</span><span className="text-gray-500 line-through pl-3">{products.price}</span></div>
                                    </div>
                                </div>
                            )
                        })
                    }    
                </div>
            </div>
        </>
    )
}

export default Products