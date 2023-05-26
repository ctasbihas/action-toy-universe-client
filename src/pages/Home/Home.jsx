import useTitle from "../../hooks/useTitle";
import Banner from "./Banner";
import CustomerShowcase from "./CustomerShowcase";
import ShopByCategory from "./ShopByCategory";
import SpecialOffers from "./SpecialOffers";
import ToyGallery from "./ToyGallery";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Home = () => {
    useTitle('Home')
    
    useEffect(() => {
        AOS.init({ duration: 800, offset: 200 });
      }, []);
    return (
        <div className="lg:my-10">
            <Banner/>
            <ToyGallery/>
            <ShopByCategory/>
            <SpecialOffers/>
            <CustomerShowcase/>
        </div>
    );
};

export default Home;