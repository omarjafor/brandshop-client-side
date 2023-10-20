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
                <div className='text-center'>
                    <h1 className='text-4xl font-bold'>Brands with Offers</h1>
                    <p className='max-w-2xl mx-auto px-5 my-4 text-base text-gray-500'>The best deals from your favorite cosmetic brands. Enjoy exclusive discounts, special promotions, and limited-time offers on a wide range of beauty products. Explore the latest collections from renowned brands while saving on your beauty essentials.</p>
                </div>
                <div className="venue-list grid-cols-1 lg:grid-cols-2">
                    <div className="venue-box" data-aos="fade-up-right">
                        <img src="https://i.ibb.co/1G1q9RP/cosmetics-beauty.jpg" alt="img" />
                            <div className="venue-info">
                                <h2>Dior</h2>
                                <p>Beauty Product Buy Now</p>
                                <button className="btn">More Info</button>
                            </div>
                    </div>
                    <div className="venue-box" data-aos="fade-up-left">
                        <img src="https://i.ibb.co/cr9fHfp/Kumarika-puja.jpg" alt="img" />
                            <div className="venue-info">
                                <h2>Revlon</h2>
                            <p>Beauty Product Buy Now</p>
                                <button className="btn">More Info</button>
                            </div>
                    </div>
                    <div className="venue-box" data-aos="fade-up-right">
                        <img src="https://i.ibb.co/sj8gDr2/Neutrogena.png" alt="img" />
                            <div className="venue-info">
                                <h2>Coty</h2>
                            <p>Beauty Product Buy Now</p>
                                <button className="btn">More Info</button>
                            </div>
                    </div>
                    <div className="venue-box" data-aos="fade-up-left">
                        <img src="https://i.ibb.co/TTBMbph/Shajgoj-Nirvana.gif" alt="img" />
                            <div className="venue-info">
                                <h2>Urban Decay</h2>
                            <p>Beauty Product Buy Now</p>
                                <button className="btn">More Info</button>
                            </div>
                    </div>
                    <div className="venue-box" data-aos="fade-up-right">
                        <img src="https://i.ibb.co/9NF9sDj/Simple.png" alt="img" />
                            <div className="venue-info">
                                <h2>Chanel</h2>
                            <p>Beauty Product Buy Now</p>
                                <button className="btn">More Info</button>
                            </div>
                    </div>
                    <div className="venue-box" data-aos="fade-up-left">
                        <img src="https://i.ibb.co/HG8NZPF/The-Body-Shop.png" alt="img" />
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