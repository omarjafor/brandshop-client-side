import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const WhyUs = () => {

    useEffect(() => {

        AOS.refresh();

        AOS.init({
            offset: 120,
            duration: 3000,
        });

    }, [])

    return (
        <section className="mx-12 space-y-5 lg:mx-24">
            <div className='mt-10 py-2' data-aos="zoom-in-up">
                <h1 className='text-4xl font-bold text-center drop-shadow-[-1px_4px_2px_rgba(17,131,6,0.6)] bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent'>Why Bombshell Beauty!</h1>
                <p className='max-w-3xl mx-auto px-5 my-4 text-base text-gray-500'>At Bombshell Beauty, we are your ultimate beauty destination. Explore top brands, discover best-sellers, and even contribute your own products. Shop with exclusive offers, and enjoy a seamless experience with easy login and registration. Join us in the pursuit of beauty and self-expression</p>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 text-left mx-10 mb-10 pb-20">
                <div className="max-w-[400px]" data-aos="zoom-in-up">
                    <small className="text-lg text-[#878787] uppercase [word-spacing:6px] tracking-widest pt-2 border-solid border-green-500 border-t-2">We Are Bombshell Beauty</small>
                    <h1 className="text-4xl mb-8 mt-5 font-semibold drop-shadow-[-1px_2px_0px_rgba(17,131,6,0.6)] bg-gradient-to-br from-green-600 via-blue-500 to-purple-600 bg-clip-text text-transparent"><strong>No.1</strong> Brand Shop for Beauty</h1>
                    <p className="text-justify mb-12 text-gray-400 text-base">
                        Bombshell Beauty we are your beauty haven. Experience the best in cosmetics and skincare with top brands, unbeatable deals, and a thriving community. Add your unique touch with our Add Product feature and shop seamlessly with easy login options. Discover the essence of beauty with us
                    </p>
                    <button className="rounded-full py-5 px-9 cursor-pointer text-base text-white hover:text-black font-semibold bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 hover:bg-gradient-to-tl">About Bombshell Beauty</button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 col-span-2">
                    <div className="text-center h-[213px] bg-gradient-to-br hover:bg-gradient-to-tl from-green-300 via-blue-500 to-purple-600 border-r border-solid border-b border-[#f0f0f0]" data-aos="zoom-in-up">
                        <div className="px-7 py-8">
                            <div className="w-12 h-12 mb-7 mx-auto">
                                <img src="https://i.ibb.co/kS42cHB/hand-shake.png" alt="" />
                            </div>
                            <h1 className="text-lg text-black hover:text-white font-bold">
                                Friendly Team
                            </h1>
                            <p className="text-[#333333] text-base hover:text-white" >
                                More than 300 teams
                            </p>
                        </div>
                    </div>
                    <div className="text-center h-[213px] bg-gradient-to-br hover:bg-gradient-to-tl from-green-300 via-blue-500 to-purple-600 border-r border-l border-solid border-b border-[#f0f0f0]" data-aos="zoom-in-up">
                        <div className="px-7 py-8">
                            <div className="w-12 h-12 mb-7 mx-auto">
                                <img src="https://i.ibb.co/Q8pWRHk/two-party-balloons.png" alt="" />
                            </div>
                            <h1 className="text-lg text-black font-bold hover:text-white">
                                Perfect Brands
                            </h1>
                            <p className="text-[#333333] text-base hover:text-white" >
                                More than 250+ Brands
                            </p>
                        </div>
                    </div>
                    <div className="text-center h-[213px]  bg-gradient-to-br hover:bg-gradient-to-tl from-green-300 via-blue-500 to-purple-600 border-l border-solid border-b border-[#f0f0f0]" data-aos="zoom-in-up">
                        <div className="px-7 py-8">
                            <div className="w-12 h-12 mb-7 mx-auto">
                                <img src="https://i.ibb.co/z7JGd1N/champagne-glass.png" alt="" />
                            </div>
                            <h1 className="text-lg text-black font-bold hover:text-white">
                                Unique Products
                            </h1>
                            <p className="text-[#333333] text-base hover:text-white" >
                                We Think Out Of the Box
                            </p>
                        </div>
                    </div>
                    <div className="text-center h-[213px]  bg-gradient-to-br hover:bg-gradient-to-tl from-green-300 via-blue-500 to-purple-600 border-r border-solid border-t border-[#f0f0f0]" data-aos="zoom-in-up">
                        <div className="px-7 py-8">
                            <div className="w-12 h-12 mb-7 mx-auto">
                                <img src="https://i.ibb.co/JxGxGMY/joker-hat.png" alt="" />
                            </div>
                            <h1 className="text-lg text-black font-bold hover:text-white">
                                Unforgettable Offers
                            </h1>
                            <p className="text-[#333333] text-base hover:text-white" >
                                We make perfect deal
                            </p>
                        </div>
                    </div>
                    <div className="text-center h-[213px]  bg-gradient-to-br hover:bg-gradient-to-tl from-green-300 via-blue-500 to-purple-600 border-r border-l border-solid border-t border-[#f0f0f0]" data-aos="zoom-in-up">
                        <div className="px-7 py-8">
                            <div className="w-12 h-12 mb-7 mx-auto">
                                <img src="https://i.ibb.co/wJ7zncH/communications.png" alt="" />
                            </div>
                            <h1 className="text-lg text-black font-bold hover:text-white">
                                24/7 Hours Support
                            </h1>
                            <p className="text-[#333333] text-base hover:text-white" >
                                Anytime Anywhere
                            </p>
                        </div>
                    </div>
                    <div className="text-center h-[213px] bg-gradient-to-br hover:bg-gradient-to-tl from-green-300 via-blue-500 to-purple-600 border-l border-solid border-t border-[#f0f0f0]" data-aos="zoom-in-up">
                        <div className="px-7 py-8">
                            <div className="w-12 h-12 mb-7 mx-auto">
                                <img src="https://i.ibb.co/JQMm7Ny/idea.png" alt="" />
                            </div>
                            <h1 className="text-lg text-black font-bold hover:text-white">
                                100% Trusted
                            </h1>
                            <p className="text-[#333333] text-base hover:text-white" >
                                We Have Million Trusted Customer
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;