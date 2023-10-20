import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/4YV40zM/banner.jpg')] bg-cover h-auto w-auto">
            <div className="h-[70vh] relative">
                <div className="text-center absolute bottom-[25%] w-full px-20">
                    <form>
                        <div className="relative">
                            <div className="md:p-6 space-y-4">
                                <h2 className="text-4xl lg:text-7xl font-bold text-green-600 shadow-blue-800 drop-shadow-[-1px_4px_5px_rgba(28,60,192,0.6)]">50% OFF</h2>
                                <h2 className="text-4xl lg:text-7xl pb-3 font-bold drop-shadow-[-1px_4px_5px_rgba(17,131,6,0.6)] bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">Bombshell Beauty</h2>
                                <h2 className="text-3xl lg:text-5xl font-bold text-[#0B0B0B]">Best Cosmetics and Beauty Brand Shop</h2>
                                <Link to='/' className="block w-2/5 lg:w-1/6 mx-auto mt-6 py-2 overflow-hidden rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 hover:bg-gradient-to-tl bg-clip-border shadow-lg shadow-pink-500/40 font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Banner;