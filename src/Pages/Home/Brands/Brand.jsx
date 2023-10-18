import { Link } from "react-router-dom";

const Brand = ({ brand }) => {

    const { name, image } = brand || {} ;

    return (
        <Link to={`/products/${name}`} className="relative m-4 flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                <img
                    src={image}
                    alt="brand image here"
                    className="h-[200px]"
                />
            </div>
            <div className="p-2">
                <h4 className="block text-black text-2xl antialiased font-bold leading-snug tracking-normal text-center">
                    {name}
                </h4>
            </div>
        </Link>
    );
};

export default Brand;