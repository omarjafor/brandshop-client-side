import { Link, useLoaderData } from 'react-router-dom';
import { useEffect, useState } from "react";
import ProductCard from './ProductCard';
import useHook from '../../Hooks/UseHook';
import { Helmet } from 'react-helmet-async';

const MyCart = () => {

    const loadedProduct = useLoaderData();
    const [cartProduct, setCartProduct] = useState(loadedProduct);

    const { user } = useHook();
    const name = user?.displayName;
    const email = user?.email;
    
    useEffect(() => {

        const filterProduct = loadedProduct?.filter(product => product.email == email)
        setCartProduct(filterProduct)

    }, [email, loadedProduct])
    
    return (
        <div className='lg:mx-12'>
            <Helmet>
                <title>Bombshell Beauty | My Cart</title>
            </Helmet>
            <div className='mt-10 py-10 text-center'>
                <h1 className='text-4xl font-bold drop-shadow-[-1px_3px_1px_rgba(17,131,6,0.6)] bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent'>Dear {name} Cart</h1>
                <p className='max-w-3xl mx-auto my-4 text-base text-green-600'> {email} </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-24 justify-items-center">
                {
                    cartProduct?.map(prod => <ProductCard 
                        cartProduct={cartProduct}
                        setCartProduct={setCartProduct}
                        prod={prod}
                        key={prod?._id}></ProductCard>)
                }
            </div>
            {cartProduct?.length == 0 &&
                <div className="flex justify-center text-center justify-items-center items-center mx-10">
                    <div className="my-6">
                        <img src="https://i.ibb.co/Qc5WQgQ/emptycart.png" alt="" className='h-[450px]' />
                        <h2 className="text-black font-bold text-3xl mb-3 drop-shadow-[-1px_3px_1px_rgba(17,131,6,0.6)] bg-gradient-to-br from-green-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">Your Cart is Empty! Browse Our Products!</h2>
                        <Link to='/'
                            className="block w-3/5 select-none rounded-lg bg-blue-500 hover:bg-green-500 py-3 px-3 font-bold uppercase text-white hover:text-black transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mx-auto"
                            type="button"
                        >
                            Start Shopping Now
                        </Link>
                    </div>
                </div>
            }
        </div>
    );
};

export default MyCart;