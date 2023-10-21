import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import { Helmet } from "react-helmet-async";
import Slider from "./Slider/Slider";


const Products = () => {

    const loadedProducts = useLoaderData();
    const { name } = useParams();

    const [products, setProducts] = useState(loadedProducts);

    useEffect(() => {

        const filterProduct = loadedProducts?.filter(product => product.brandName == name)
        setProducts(filterProduct);

    }, [loadedProducts, name])

    return (
        <div>
            <Helmet>
                <title>Bombshell Beauty | Products</title>
            </Helmet>
            <Slider></Slider>
            { products?.length == 0 ?
                <div className="flex justify-center items-center mx-10 h-[80vh]">
                    <div className="text-center">
                        <img src="https://i.ibb.co/Z1FwJQz/noproduct.png" alt="" className='h-[450px]' />
                        <h2 className="text-black font-bold text-3xl drop-shadow-[-1px_3px_1px_rgba(17,131,6,0.6)] bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">Oops!! This Brand Products is Out of Stock !</h2>
                        <h2 className="text-green-400 font-bold text-xl">Please Check Another Brand Products</h2>
                    </div>
                </div>
                :
                <h2 className="text-5xl font-bold text-center mt-12 drop-shadow-[-1px_3px_1px_rgba(17,131,6,0.6)] bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"> {name} Brands Products </h2>
            }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-24 my-5 justify-items-center">
                
                {
                    products?.map(prod => <Product key={prod?._id}
                        prod={prod}
                    ></Product>)
                }
            </div>
        </div>

    );
};

export default Products;