import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './components/Home';
import NotFound from './components/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails';
import CorporateGifting from './components/CorporateGifting';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import Helps from './components/Pages/Helps';
import { Helmet } from 'react-helmet';
import {BASE_URL} from "./components/Pages/BaseUrl";
import ContactUs from './components/ContactUs';
import WarrantyForm from './components/WarrantyForm';
import ScrollToTop from './components/Pages/ScrollToTop';

function App() {
  return (
    <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Elmira Bags - Home Page</title>
            <meta name="description" content="Welcome to Elmira Bags, Excellence Craftmanship. Shop now and adorn yourself with the perfect accessory that speaks volumes about your individuality." />
            <link rel="canonical" href={BASE_URL} />
        </Helmet>
       
        <Router>
          <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/warranty" element={<WarrantyForm />} />

                <Route path="/collections/:category" element={<Products />} />
                <Route path="/products/:productname" element={<ProductDetails />} />

                <Route path="/pages/:helps" element={<Helps />} />
                
                <Route path="/gifting" element={<CorporateGifting />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    </>
  );
}

export default App;
