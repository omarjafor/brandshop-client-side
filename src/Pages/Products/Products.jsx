import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";


const Products = () => {
    
    const loadedProducts = useLoaderData();
    const { name } = useParams();

    const [products, setProducts] = useState(loadedProducts);

    useEffect( () =>{

        const filterProduct = loadedProducts?.filter(product => product.brandName == name)
        setProducts(filterProduct);

    } ,[loadedProducts, name])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-24 justify-items-center">
            {
                products?.map(prod => <Product key={prod?._id}
                    prod={prod}
                ></Product>)
            }
        </div>
    );
};

export default Products;