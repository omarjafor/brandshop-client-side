import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const BestSell = () => {

    useEffect(() => {

        AOS.refresh();

        AOS.init({
            offset: 120,
            duration: 3000,
        });


    }, [])


    return (
        <div className="my-10 mx-16 lg:mx-24">
            <div className="my-4" data-aos="zoom-in-up">
                <h2 className="text-2xl text-green-500 font-semibold italic mb-3">Trending Products</h2>
                <h2 className="text-4xl font-bold drop-shadow-[-1px_3px_1px_rgba(17,131,6,0.6)] bg-gradient-to-br from-green-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">Best Selling Products</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <div className="card w-[342px] shadow-xl p-4 rounded-lg" data-aos="zoom-in-up">
                    <figure className="bg-[#1111110D] p-5 w-[302px] h-[200px] text-center rounded-lg"><img
                        src="https://i.ibb.co/vZZkLMP/product1.jpg" alt="Tea" /></figure>
                    <div className=" text-center">
                        <div className="rating rating-md mt-5 rating-half">
                            <input type="radio" name="Rating-11" className="bg-[#FFC107] mask mask-star-2 mask-half-1" />
                            <input type="radio" name="Rating-11" className="bg-[#FFC107] mask mask-star-2 mask-half-2" />
                            <input type="radio" name="Rating-11" className="rating-hidden" />
                            <input type="radio" name="Rating-11" className="bg-[#FFC107] mask mask-star-2 mask-half-1" />
                            <input type="radio" name="Rating-11" className="bg-[#FFC107] mask mask-star-2 mask-half-2" />
                            <input type="radio" name="Rating-11" className="bg-[#FFC107] mask mask-star-2 mask-half-1" />
                            <input type="radio" name="Rating-11" className="bg-[#FFC107] mask mask-star-2 mask-half-2" />
                            <input type="radio" name="Rating-11" className="bg-[#FFC107] mask mask-star-2 mask-half-1" />
                            <input type="radio" name="Rating-11" className="bg-[#FFC107] mask mask-star-2 mask-half-2" checked />
                            <input type="radio" name="Rating-11" className="bg-[#FFC107] mask mask-star-2 mask-half-1" />
                            <input type="radio" name="Rating-11" className="bg-[#FFC107] mask mask-star-2 mask-half-2" />
                        </div>
                        <h2 id="card1Name" className="text-xl font-extrabold my-2 text-green-500">Deodorant Para Muter</h2>
                        <p className="text-xl text-green-400"><span id="card1Price">199.00</span> $ </p>
                    </div>
                </div>
                <div className="card w-[342px] shadow-xl p-4 rounded-lg" data-aos="zoom-in-up">
                    <figure className="bg-[#1111110D] p-5 w-[302px] h-[200px] text-center rounded-lg"><img
                        src="https://i.ibb.co/3C1Qy31/product2.jpg" alt="Tea" /></figure>
                    <div className=" text-center">
                        <div className="rating rating-md mt-5 rating-half">
                            <input type="radio" name="Rating-21" className="rating-hidden" />
                            <input type="radio" name="Rating-21" className="bg-[#FFC107] mask mask-star-2 mask-half-1" />
                            <input type="radio" name="Rating-21" className="bg-[#FFC107] mask mask-star-2 mask-half-2" />
                            <input type="radio" name="Rating-21" className="bg-[#FFC107] mask mask-star-2 mask-half-1" />
                            <input type="radio" name="Rating-21" className="bg-[#FFC107] mask mask-star-2 mask-half-2" />
                            <input type="radio" name="Rating-21" className="bg-[#FFC107] mask mask-star-2 mask-half-1" />
                            <input type="radio" name="Rating-21" className="bg-[#FFC107] mask mask-star-2 mask-half-2" />
                            <input type="radio" name="Rating-21" className="bg-[#FFC107] mask mask-star-2 mask-half-1" checked />
                            <input type="radio" name="Rating-21" className="bg-[#FFC107] mask mask-star-2 mask-half-2" />
                            <input type="radio" name="Rating-21" className="bg-[#FFC107] mask mask-star-2 mask-half-1"  />
                            <input type="radio" name="Rating-21" className="bg-[#FFC107] mask mask-star-2 mask-half-2" />
                        </div>
                        <h2 id="card1Name" className="text-xl font-extrabold my-2 text-green-500">Lotion Creame</h2>
                        <p className="text-xl text-green-400"><span id="card1Price">239.00</span> $ </p>
                    </div>
                </div>
                <div className="card w-[342px] shadow-xl p-4 rounded-lg" data-aos="zoom-in-up">
                    <figure className="bg-[#1111110D] p-5 w-[302px] h-[200px] text-center rounded-lg"><img
                        src="https://i.ibb.co/x6RnQgh/product3.jpg" alt="Tea" /></figure>
                    <div className=" text-center">
                        <div className="rating rating-md mt-5 rating-half">
                            <input type="radio" name="Rating-13" className="rating-hidden" />
                            <input type="radio" name="Rating-13" className="bg-[#FFC107] mask mask-star-2 mask-half-1" />
                            <input type="radio" name="Rating-13" className="bg-[#FFC107] mask mask-star-2 mask-half-2" />
                            <input type="radio" name="Rating-13" className="bg-[#FFC107] mask mask-star-2 mask-half-1" />
                            <input type="radio" name="Rating-13" className="bg-[#FFC107] mask mask-star-2 mask-half-2" />
                            <input type="radio" name="Rating-13" className="bg-[#FFC107] mask mask-star-2 mask-half-1" />
                            <input type="radio" name="Rating-13" className="bg-[#FFC107] mask mask-star-2 mask-half-2" />
                            <input type="radio" name="Rating-13" className="bg-[#FFC107] mask mask-star-2 mask-half-1" />
                            <input type="radio" name="Rating-13" className="bg-[#FFC107] mask mask-star-2 mask-half-2" checked />
                            <input type="radio" name="Rating-13" className="bg-[#FFC107] mask mask-star-2 mask-half-1"  />
                            <input type="radio" name="Rating-13" className="bg-[#FFC107] mask mask-star-2 mask-half-2" />
                        </div>
                        <h2 id="card1Name" className="text-xl font-extrabold my-2 text-green-500">Ordinary Gel</h2>
                        <p className="text-xl text-green-400"><span id="card1Price">249.00</span> $ </p>
                    </div>
                </div>
                <div className="card w-[342px] shadow-xl p-4 rounded-lg" data-aos="zoom-in-up">
                    <figure className="bg-[#1111110D] p-5 w-[302px] h-[200px] text-center rounded-lg"><img
                        src="https://i.ibb.co/JF70Hnt/product4.jpg" alt="Tea" /></figure>
                    <div className=" text-center">
                        <div className="rating rating-md mt-5 rating-half">
                            <input type="radio" name="Rating-1" className="rating-hidden" />
                            <input type="radio" name="Rating-1" className="bg-[#FFC107] mask mask-star-2 mask-half-1" />
                            <input type="radio" name="Rating-1" className="bg-[#FFC107] mask mask-star-2 mask-half-2" />
                            <input type="radio" name="Rating-1" className="bg-[#FFC107] mask mask-star-2 mask-half-1" />
                            <input type="radio" name="Rating-1" className="bg-[#FFC107] mask mask-star-2 mask-half-2" />
                            <input type="radio" name="Rating-1" className="bg-[#FFC107] mask mask-star-2 mask-half-1" />
                            <input type="radio" name="Rating-1" className="bg-[#FFC107] mask mask-star-2 mask-half-2" />
                            <input type="radio" name="Rating-1" className="bg-[#FFC107] mask mask-star-2 mask-half-1" />
                            <input type="radio" name="Rating-1" className="bg-[#FFC107] mask mask-star-2 mask-half-2" />
                            <input type="radio" name="Rating-1" className="bg-[#FFC107] mask mask-star-2 mask-half-1" checked />
                            <input type="radio" name="Rating-1" className="bg-[#FFC107] mask mask-star-2 mask-half-2" />
                        </div>
                        <h2 id="card1Name" className="text-xl font-extrabold my-2 text-green-500">Creame Cleanser</h2>
                        <p className="text-xl text-green-400"><span id="card1Price">189.00</span> $ </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSell;