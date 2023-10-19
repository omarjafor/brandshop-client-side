import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {

    const product = useLoaderData();
    const { _id, productName, brandName, type, price, description, rating, photo } = product || {};

    return (
        <div>
            Here is product Name: { productName }
        </div>
    );
};

export default ProductDetails;