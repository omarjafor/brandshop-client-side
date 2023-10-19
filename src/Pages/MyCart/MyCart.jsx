import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from "react";
import ProductCard from './ProductCard';
import useHook from '../../Hooks/UseHook';

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

    console.log(cartProduct, name)
    
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-24 justify-items-center">
                {
                    cartProduct?.map(prod => <ProductCard 
                        prod={prod}
                        key={prod?._id}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default MyCart;