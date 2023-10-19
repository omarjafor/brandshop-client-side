import { useLoaderData } from "react-router-dom";
import ReactStars from 'react-stars';
import useHook from "../../Hooks/UseHook";
import toast from "react-hot-toast";


const ProductDetails = () => {
    const { user } = useHook();
    const email = user.email;

    const product = useLoaderData();
    const { productName, brandName, type, price, description, rating, photo } = product || {};

    const handleAddToCart = e => {
        e.preventDefault();
        const myCartProduct = {...product, email} ;

        fetch('http://localhost:5000/mycart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myCartProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Added To MyCart Successful');
            })
    }

    return (
        <div>
            <div className="mx-auto py-12 w-5/6 grid gap-10 grid-cols-1 lg:grid-cols-2 justify-items-center">
                <div className="mb-12 flex flex-col overflow-hidden rounded-xl shadow-md">
                    <img
                        alt="details"
                        className="h-[700px] w-full object-cover object-center"
                        src={photo}
                    />
                </div>
                <div className="text-left">
                    <div className="flex mb-4">
                        <img src="https://i.ibb.co/1rd2fW3/bookmark.png" alt="bookmark" className="h-8 w-8" />
                        <h4 className="text-2xl font-semibold"> Featured Product </h4>
                    </div>
                    <h2 className="mb-6 block text-4xl font-bold leading-[1.3] tracking-normal text-[#0B0B0B] antialiased">
                        {productName}
                    </h2>
                    <div className="flex mb-5">
                        <div className="flex items-center p-4 mr-2 w-1/3 rounded-md bg-gray-200">
                            <img src="https://i.ibb.co/yQVKVxh/brand.png" alt="" className="h-8 w-8" />
                            <div className="ml-4">
                                <h4 className="font-bold text-[#878787] text-base">Brand Name</h4>
                                <h2 className="font-bold text-lg uppercase"> {brandName} </h2>
                            </div>
                        </div>
                        <div className="flex items-center p-4 mr-2 w-1/3 rounded-md bg-gray-200">
                            <img src="https://i.ibb.co/cJnM07D/product.png" alt="" className="h-8 w-8" />
                            <div className="ml-4">
                                <h4 className="font-bold text-[#878787] text-base">Product Type</h4>
                                <h2 className="font-bold text-lg uppercase"> {type} </h2>
                            </div>
                        </div>
                        <div className="flex items-center p-4 w-1/3 rounded-md bg-gray-200">
                            <img src="https://i.ibb.co/4jRbSyK/price.png" alt="" className="h-8 w-8" />
                            <div className="ml-4">
                                <h4 className="font-bold text-[#878787] text-base">Product Price</h4>
                                <h2 className="font-bold text-lg uppercase"> {price} </h2>
                            </div>
                        </div>
                    </div>
                    <p className="block text-lg font-normal text-justify leading-8 text-gray-900 antialiased">
                        {description} Our carefully curated products are designed to provide you with the tools to transform, empower, and embrace your best self. Elevate your daily routine and uncover the magic of self expression with quality beauty products.
                    </p>
                    <div className="flex items-center p-2 w-1/3 my-4 rounded-md bg-green-400 hover:bg-blue-400">
                        <img src="https://i.ibb.co/nLy6sYf/ratings.png" alt="" className="h-8 w-8" />
                        <div className="ml-3">
                            <h4 className="font-bold text-black hover:text-white text-base">Product Ratings</h4>
                            <ReactStars
                                count={5}
                                value={Number(rating)}
                                size={24}
                                color2={'#ffd700'} />
                        </div>
                    </div>
                    <button onClick={handleAddToCart}
                    className="px-5 py-2 my-3 rounded-lg font-bold btn btn-wide bg-blue-500 hover:bg-green-500 text-white hover:text-black">
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;