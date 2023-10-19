import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import { Helmet } from "react-helmet-async";


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
            { products?.length == 0 &&
                <div className="flex justify-center items-center mx-10 h-[80vh]">
                    <div className="text-center">
                        <img src="https://i.ibb.co/Z1FwJQz/noproduct.png" alt="" className='h-[450px]' />
                        <h2 className="text-black font-bold text-3xl">Oops!! This Brand Products is Out of Stock !</h2>
                        <h2 className="text-[#171717] font-bold text-xl">Please Check Another Brand Products</h2>
                    </div>
                </div>
            }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-24 justify-items-center">
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