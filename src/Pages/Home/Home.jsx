import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Brands from "./Brands/Brands";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bombshell Beauty | Home</title>
            </Helmet>
            <Banner></Banner>
            <Brands></Brands>
        </div>
    );
};

export default Home;