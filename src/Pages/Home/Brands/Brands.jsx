import { useEffect, useState } from "react";
import Brand from "./Brand";


const Brands = () => {

    const [brands, setBrands] = useState([]);

    useEffect( () => {
        fetch('https://brandshop-server-side.vercel.app/brand')
        .then(res => res.json())
        .then(data => setBrands(data))
    } , [])

    return (
        <div className="mx-10 my-20">
            <h1 className="text-3xl font-bold text-black dark:text-white text-center">Our Top Brands</h1>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-6">
                {
                    brands.map(brand => <Brand key={brand._id}
                        brand={brand}
                    ></Brand>)
                }
            </div>
        </div>
    );
};

export default Brands;