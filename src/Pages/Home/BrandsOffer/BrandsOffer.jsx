import AOS from 'aos';
import 'aos/dist/aos.css';
import './brandsOffer.css'
import { useEffect } from 'react';


const BrandsOffer = () => {

    useEffect( () => {

        AOS.refresh();
        
        AOS.init({
            offset: 120,
            duration: 3000,
        });

        
    } ,[])

    return (
        <div>
            <section className="venue mx-auto my-24" id="venue">
                <div className='text-center' data-aos="zoom-in-up">
                    <h1 className='text-4xl font-bold drop-shadow-[-1px_4px_2px_rgba(17,131,6,0.6)] bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent'>Brands with Offers</h1>
                    <p className='max-w-2xl mx-auto px-5 my-4 text-base text-green-400'>The best deals from your favorite cosmetic brands. Enjoy exclusive discounts, special promotions, and limited-time offers on a wide range of beauty products. Explore the latest collections from renowned brands while saving on your beauty essentials.</p>
                </div>
                <div className="venue-list grid-cols-1 lg:grid-cols-2">
                    <div className="venue-box" data-aos="fade-up-right">
                        <img src="https://i.ibb.co/dWSNMH9/Shajgoj-Nirvana.gif" alt="img" />
                            <div className="venue-info">
                                <h2>Dior</h2>
                                <p>Beauty Product Buy Now</p>
                                <button className="btn">More Info</button>
                            </div>
                    </div>
                    <div className="venue-box" data-aos="fade-up-left">
                        <img src="https://i.ibb.co/rMfr1Vb/Kumarika-puja.jpg" alt="img" />
                            <div className="venue-info">
                                <h2>Revlon</h2>
                            <p>Beauty Product Buy Now</p>
                                <button className="btn">More Info</button>
                            </div>
                    </div>
                    <div className="venue-box" data-aos="fade-up-right">
                        <img src="https://i.ibb.co/tDxbmnv/Neutrogena.png" alt="img" />
                            <div className="venue-info">
                                <h2>Coty</h2>
                            <p>Beauty Product Buy Now</p>
                                <button className="btn">More Info</button>
                            </div>
                    </div>
                    <div className="venue-box" data-aos="fade-up-left">
                        <img src="https://i.ibb.co/qgTQkwk/cosmetics-beauty.jpg" alt="img" />
                            <div className="venue-info">
                                <h2>Urban Decay</h2>
                            <p>Beauty Product Buy Now</p>
                                <button className="btn">More Info</button>
                            </div>
                    </div>
                    <div className="venue-box" data-aos="fade-up-right">
                        <img src="https://i.ibb.co/mRXHP5D/Simple.png" alt="img" />
                            <div className="venue-info">
                                <h2>Chanel</h2>
                            <p>Beauty Product Buy Now</p>
                                <button className="btn">More Info</button>
                            </div>
                    </div>
                    <div className="venue-box" data-aos="fade-up-left">
                        <img src="https://i.ibb.co/xsmcyV7/The-Body-Shop.png" alt="img" />
                            <div className="venue-info">
                                <h2>Loreal</h2>
                            <p>Beauty Product Buy Now</p>
                                <button className="btn">More Info</button>
                            </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BrandsOffer;