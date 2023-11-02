import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Brands from "./Brands/Brands";
import BestSell from "./BestSell/BestSell";
import BrandsOffer from "./BrandsOffer/BrandsOffer";
import WhyUs from "./WhyUs/WhyUs";
import Reviews from "./Reviews/Reviews";


const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <Helmet>
                <title>Bombshell Beauty | Home</title>
            </Helmet>
            <Banner></Banner>
            <Brands></Brands>
            <BestSell></BestSell>
            <BrandsOffer></BrandsOffer>
            <WhyUs></WhyUs>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;