import React, { useEffect, useState } from 'react'
import helps from "../json/helps.json";
import { useNavigate, useParams } from 'react-router-dom';

const Helps = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [useProducts, setUseProducts] = useState([]);

    useEffect(() => {
        const productsFilteredData = helps?.helps.filter((curElem) => {
            if (`/pages/${params.helps}` === curElem.links) {
                return true;
            } else {
                return false;
            }
        });
        setUseProducts(productsFilteredData);
    }, [params.helps]);

    console.log(useProducts);
  return (
  
<>
        {
            useProducts?.length === 0 ? 
            navigate("/notfound")
             :                                       
          useProducts?.filter((curElem, index) => index < 1 ).map((products, index) => {
            return (
                <div className="p-6">
                <h1 className="text-2xl font-bold pb-8">{products.name.toUpperCase()}</h1>
                
                {
                    products.content.map((curElem) =>
                    <div className="flex flex-col mb-6">
                        <h1 className="text-lg mb-3 font-bold text-black">{curElem.heading}</h1>
                        {curElem.content.map((content) => <p className="text-base text-gray-700 mb-3">{content}</p>)}                        
                    </div> 
                    )
                }
                
            </div>
            )}
          )
        }
        
        </>
  )
}

export default Helps