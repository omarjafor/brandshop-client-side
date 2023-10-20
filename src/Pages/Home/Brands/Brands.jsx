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
            <h1 className="text-4xl font-bold text-center drop-shadow-[-1px_3px_1px_rgba(17,131,6,0.6)] bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-3">Our Top Brands</h1>
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