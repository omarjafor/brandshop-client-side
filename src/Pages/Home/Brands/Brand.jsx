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
                <h4 className="text-black text-3xl antialiased font-bold leading-snug tracking-normal text-center drop-shadow-[-1px_3px_0px_rgba(17,131,6,0.6)] bg-gradient-to-br from-green-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    {name}
                </h4>
            </div>
        </Link>
    );
};

export default Brand;