import { Link } from "react-router-dom";
import ReactStars from 'react-stars';


const Product = ({ prod }) => {

    const { _id, productName, brandName, type, price, rating, photo } = prod || {} ;

    return (
        <section className="my-8">
            <div className="relative flex w-96 flex-col rounded-xl bg-blue-400 hover:bg-green-400 bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                        src={photo}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <div className="mb-2 flex items-center justify-between">
                        <p className="block font-sans text-lg font-bold leading-relaxed text-black antialiased">
                            {productName}
                        </p>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <p>Brand Name : { brandName } </p>
                            <p>Type : { type } </p>
                        </div>
                        <div>
                            <ReactStars
                                count={5}
                                value={Number(rating)}
                                size={24}
                                color2={'#ffd700'} />
                            <p className=" text-base font-medium text-right text-black antialiased">
                                ${price}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-6 pt-0 space-y-3">
                    <Link to={`/updateProduct/${_id}`}
                        className="block w-full select-none rounded-lg bg-blue-500 hover:bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white hover:text-black transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        Update Product
                    </Link>
                    <Link to={`/productdetails/${_id}`}
                        className="block w-full select-none rounded-lg bg-blue-500 hover:bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white hover:text-black transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        Product Details
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Product;